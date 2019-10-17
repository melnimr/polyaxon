#!/usr/bin/python
#
# Copyright 2019 Polyaxon, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# coding: utf-8

"""
    Polyaxon sdk

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: 1.14.4
    Contact: contact@polyaxon.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import unittest

import polyaxon_sdk
from polyaxon_sdk.api.runs_v1_api import RunsV1Api  # noqa: E501
from polyaxon_sdk.rest import ApiException


class TestRunsV1Api(unittest.TestCase):
    """RunsV1Api unit test stubs"""

    def setUp(self):
        self.api = polyaxon_sdk.api.runs_v1_api.RunsV1Api()  # noqa: E501

    def tearDown(self):
        pass

    def test_archive_run(self):
        """Test case for archive_run

        Archive run  # noqa: E501
        """
        pass

    def test_bookmark_run(self):
        """Test case for bookmark_run

        Bookmark run  # noqa: E501
        """
        pass

    def test_copy_run(self):
        """Test case for copy_run

        Restart run with copy  # noqa: E501
        """
        pass

    def test_create_run(self):
        """Test case for create_run

        Create new run  # noqa: E501
        """
        pass

    def test_create_run_code_ref(self):
        """Test case for create_run_code_ref

        Get run code ref  # noqa: E501
        """
        pass

    def test_create_run_status(self):
        """Test case for create_run_status

        Create new run status  # noqa: E501
        """
        pass

    def test_delete_run(self):
        """Test case for delete_run

        Delete run  # noqa: E501
        """
        pass

    def test_delete_runs(self):
        """Test case for delete_runs

        Delete runs  # noqa: E501
        """
        pass

    def test_get_run(self):
        """Test case for get_run

        Get run  # noqa: E501
        """
        pass

    def test_get_run_code_refs(self):
        """Test case for get_run_code_refs

        Get run code ref  # noqa: E501
        """
        pass

    def test_get_run_statuses(self):
        """Test case for get_run_statuses

        Get run status  # noqa: E501
        """
        pass

    def test_impersonate_token(self):
        """Test case for impersonate_token

        Impersonate run token  # noqa: E501
        """
        pass

    def test_invalidate_run(self):
        """Test case for invalidate_run

        Stop run  # noqa: E501
        """
        pass

    def test_invalidate_runs(self):
        """Test case for invalidate_runs

        Invalidate runs  # noqa: E501
        """
        pass

    def test_list_archived_runs(self):
        """Test case for list_archived_runs

        List archived runs for user  # noqa: E501
        """
        pass

    def test_list_bookmarked_runs(self):
        """Test case for list_bookmarked_runs

        List bookmarked runs for user  # noqa: E501
        """
        pass

    def test_list_runs(self):
        """Test case for list_runs

        List runs  # noqa: E501
        """
        pass

    def test_patch_run(self):
        """Test case for patch_run

        Patch run  # noqa: E501
        """
        pass

    def test_restart_run(self):
        """Test case for restart_run

        Restart run  # noqa: E501
        """
        pass

    def test_restore_run(self):
        """Test case for restore_run

        Restore run  # noqa: E501
        """
        pass

    def test_resume_run(self):
        """Test case for resume_run

        Resume run  # noqa: E501
        """
        pass

    def test_start_run_tensorboard(self):
        """Test case for start_run_tensorboard

        Start run tensorboard  # noqa: E501
        """
        pass

    def test_stop_run(self):
        """Test case for stop_run

        Stop run  # noqa: E501
        """
        pass

    def test_stop_run_tensorboard(self):
        """Test case for stop_run_tensorboard

        Stop run tensorboard  # noqa: E501
        """
        pass

    def test_stop_runs(self):
        """Test case for stop_runs

        Stop runs  # noqa: E501
        """
        pass

    def test_unbookmark_run(self):
        """Test case for unbookmark_run

        Unbookmark run  # noqa: E501
        """
        pass

    def test_update_run(self):
        """Test case for update_run

        Update run  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
