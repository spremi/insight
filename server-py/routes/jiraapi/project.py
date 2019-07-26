#
# [insight]
#
# Sanjeev Premi <spremi@ymail.com>
#
# Available under terms of the BSD-3-Clause license.
#

import logging
import falcon

log = logging.getLogger('app')


class Project():
    """
    Handle requests related to project(s)
    """

    def on_get(self, req: falcon.Request, res: falcon.Response, projId: str = None, resource: str = None):
        log.debug('[JIRA] Projects')

        res.body = 'PROJECTS'
        res.status = falcon.HTTP_200
        res.content_type = 'text/plain; charset=utf-8'
