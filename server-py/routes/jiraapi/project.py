#
# [insight]
#
# Sanjeev Premi <spremi@ymail.com>
#
# Available under terms of the BSD-3-Clause license.
#

import logging
import falcon

from generic.Endpoint import Endpoint

log = logging.getLogger('app')


class Project(Endpoint):
    """
    Handle requests related to project(s)
    """

    def on_get(self, req: falcon.Request, res: falcon.Response, projId: str = None, resource: str = None):
        log.debug('[JIRA] Projects')

        self.showParams(projId, resource)

        res.body = 'PROJECTS'
        res.status = falcon.HTTP_200
        res.content_type = 'text/plain; charset=utf-8'
