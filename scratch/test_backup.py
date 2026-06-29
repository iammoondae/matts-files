#!/usr/bin/env python3
import os
import sys
import shutil
import tempfile
import unittest
from unittest.mock import patch

# Add parent directory to path to import backup.py
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import backup

class TestBackupProtocol(unittest.TestCase):
    def setUp(self):
        # Create a temporary directory structure mimicking the project
        self.test_dir = tempfile.mkdtemp()
        
        # Create dummy source files and folders
        os.makedirs(os.path.join(self.test_dir, ".git"))
        os.makedirs(os.path.join(self.test_dir, "android-project", "app", "build"))
        os.makedirs(os.path.join(self.test_dir, "android-project", ".gradle"))
        os.makedirs(os.path.join(self.test_dir, "build-tools"))
        os.makedirs(os.path.join(self.test_dir, "data"))
        os.makedirs(os.path.join(self.test_dir, "images"))
        
        # Write dummy files
        with open(os.path.join(self.test_dir, "app.js"), "w") as f:
            f.write("console.log('test');")
        with open(os.path.join(self.test_dir, "index.html"), "w") as f:
            f.write("<html></html>")
        with open(os.path.join(self.test_dir, "app-debug.apk"), "w") as f:
            f.write("APK contents")
        with open(os.path.join(self.test_dir, "android-project", "app", "build", "outputs.apk"), "w") as f:
            f.write("nested apk")
        with open(os.path.join(self.test_dir, "data", "test.json"), "w") as f:
            f.write("{}")
            
        # Point backup module constants to the temp directory
        backup.WORKSPACE_DIR = self.test_dir
        backup.BACKUPS_DIR = os.path.join(self.test_dir, "backups")
        backup.VERSION_LOG_FILE = os.path.join(backup.BACKUPS_DIR, "versionlog.txt")

    def tearDown(self):
        # Clean up temp directories
        shutil.rmtree(self.test_dir)

    def test_backup_exclusions(self):
        # Mock sys.argv to pass a description
        with patch.object(sys, 'argv', ['backup.py', 'Initial Test Backup']):
            backup.run_backup()
            
        # Verify backups folder exists and contains exactly 1 backup directory
        backups = [d for d in os.listdir(backup.BACKUPS_DIR) if backup.VERSION_PATTERN.match(d)]
        self.assertEqual(len(backups), 1)
        backup_path = os.path.join(backup.BACKUPS_DIR, backups[0])
        
        # Verify included files
        self.assertTrue(os.path.exists(os.path.join(backup_path, "app.js")))
        self.assertTrue(os.path.exists(os.path.join(backup_path, "index.html")))
        self.assertTrue(os.path.exists(os.path.join(backup_path, "data", "test.json")))
        
        # Verify excluded files/folders
        self.assertFalse(os.path.exists(os.path.join(backup_path, ".git")))
        self.assertFalse(os.path.exists(os.path.join(backup_path, "build-tools")))
        self.assertFalse(os.path.exists(os.path.join(backup_path, "android-project", "app", "build")))
        self.assertFalse(os.path.exists(os.path.join(backup_path, "android-project", ".gradle")))
        self.assertFalse(os.path.exists(os.path.join(backup_path, "app-debug.apk")))
        
        # Verify log file contents
        self.assertTrue(os.path.exists(backup.VERSION_LOG_FILE))
        with open(backup.VERSION_LOG_FILE, "r") as f:
            lines = f.readlines()
        self.assertEqual(len(lines), 1)
        self.assertTrue(lines[0].startswith(backups[0]))
        self.assertIn("Initial Test Backup", lines[0])

    @patch('backup.datetime')
    def test_backup_rotation(self, mock_datetime):
        import datetime as dt_orig
        # Setup mock datetimes for chronological ordering
        # We will create 5 backups, but temporarily limit to max 3
        times = [
            dt_orig.datetime(2026, 6, 29, 10, 0, 0),
            dt_orig.datetime(2026, 6, 29, 11, 0, 0),
            dt_orig.datetime(2026, 6, 29, 12, 0, 0),
            dt_orig.datetime(2026, 6, 29, 13, 0, 0),
            dt_orig.datetime(2026, 6, 29, 14, 0, 0),
        ]
        mock_datetime.datetime.now.side_effect = times
        
        # Patch rotation limit to 3 instead of 30
        backup.MAX_BACKUPS = 3
        
        # Mock sys.argv to make sure get_description goes to our mocked side_effect
        with patch.object(sys, 'argv', ['backup.py']):
            with patch('backup.get_description', side_effect=[
                "Backup 1", "Backup 2", "Backup 3", "Backup 4", "Backup 5"
            ]):
                for _ in range(5):
                    backup.run_backup()
                    
        # Verify backups folder contains exactly 3 directories on disk
        backups = [d for d in os.listdir(backup.BACKUPS_DIR) if backup.VERSION_PATTERN.match(d)]
        self.assertEqual(len(backups), 3)
        
        # The backups remaining should be the 3rd, 4th, and 5th
        expected_backups = [
            "26.06.29_120000",
            "26.06.29_130000",
            "26.06.29_140000"
        ]
        self.assertEqual(sorted(backups), sorted(expected_backups))
        
        # Verify versionlog.txt has exactly 3 entries, newest at the top
        with open(backup.VERSION_LOG_FILE, "r") as f:
            lines = f.readlines()
        self.assertEqual(len(lines), 3)
        self.assertTrue(lines[0].startswith("26.06.29_140000: Backup 5"))
        self.assertTrue(lines[1].startswith("26.06.29_130000: Backup 4"))
        self.assertTrue(lines[2].startswith("26.06.29_120000: Backup 3"))

if __name__ == "__main__":
    unittest.main()
