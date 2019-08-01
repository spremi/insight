#
# [insight]
#
# Sanjeev Premi <spremi@ymail.com>
#
# Available under terms of the BSD-3-Clause license.
#

import logging
import falcon

from .jiraapi.auth import AuthLogin, AuthLogout
from .jiraapi.issue import Issue
from .jiraapi.project import Project
from .jiraapi.user import User

log = logging.getLogger('app')


class Jira():
    """
    Connects to 'Jira' for handling requests.
    """

    def __init__(self):
        self.login = AuthLogin('/login')
        self.logout = AuthLogout('/logout')
        self.user = User('/users')
        self.project = Project('/projects')
        self.issue = Issue('/issues')

    def on_get(self, req, res, task):
        log.debug('Fake')

        res.body = 'FAKE'
        res.status = falcon.HTTP_200
        res.content_type = 'text/plain; charset=utf-8'