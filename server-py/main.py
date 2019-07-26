#
# [insight]
#
# Sanjeev Premi <spremi@ymail.com>
#
# Available under terms of the BSD-3-Clause license.
#

import falcon

app = application = falcon.API()


class Ready():
    """
    Default application response
    """

    def on_get(self, req, res):
        res.body = 'Ready.'
        res.status = falcon.HTTP_200
        res.content_type = 'text/plain; charset=utf-8'


#
# Define route(s)
#
app.add_route('/', Ready())
