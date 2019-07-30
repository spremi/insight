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


class Issue(Endpoint):
    """
    Handle requests related to issue(s).
    """

    def on_get(self, req: falcon.Request, res: falcon.Response, issueId: str = None, resource: str = None):
        log.debug('[FAKE] Issues')

        self.showParams(issueId, resource)

        res.body = 'ISSUES'
        res.status = falcon.HTTP_200
        res.content_type = 'text/plain; charset=utf-8'
