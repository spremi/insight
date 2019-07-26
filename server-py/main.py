#
# [insight]
#
# Sanjeev Premi <spremi@ymail.com>
#
# Available under terms of the BSD-3-Clause license.
#

import falcon

from generic import config
from generic import log

from routes.fake import Fake
from routes.jira import Jira
from routes.version import Version

app = application = falcon.API()

logger = log.setup('DEBUG')


class Ready():
    """
    Default application response
    """

    def on_get(self, req, res):
        logger.info('Ready.')

        res.body = 'Ready.'
        res.status = falcon.HTTP_200
        res.content_type = 'text/plain; charset=utf-8'


#
# Define route(s)
#
app.add_route('/', Ready())
app.add_route('/version', Version())

if config.MODE == 'FAKE':
    fakeObj = Fake()

    app.add_route('/login', fakeObj.login)
    app.add_route('/logout', fakeObj.logout)

    app.add_route('/projects', fakeObj.project)
    app.add_route('/projects/{projId}', fakeObj.project)
    app.add_route('/projects/{projId}/{resource}', fakeObj.project)

    app.add_route('/issues', fakeObj.issue)
    app.add_route('/issues/{issueId}', fakeObj.issue)
    app.add_route('/issues/{issueId}/{resource}', fakeObj.issue)

    app.add_route('/users', fakeObj.user)
    app.add_route('/users/{userId}', fakeObj.user)
    app.add_route('/users/{userId}/{resource}', fakeObj.user)

elif config.MODE == 'JIRA':
    jiraObj = Jira()

    app.add_route('/login', jiraObj.login)
    app.add_route('/logout', jiraObj.logout)

    app.add_route('/projects', jiraObj.project)
    app.add_route('/projects/{projId}', jiraObj.project)
    app.add_route('/projects/{projId}/{resource}', jiraObj.project)

    app.add_route('/issues', jiraObj.issue)
    app.add_route('/issues/{issueId}', jiraObj.issue)
    app.add_route('/issues/{issueId}/{resource}', jiraObj.issue)

    app.add_route('/users', jiraObj.user)
    app.add_route('/users/{userId}', jiraObj.user)
    app.add_route('/users/{userId}/{resource}', jiraObj.user)

else:
    pass
