#
# [insight]
#
# Sanjeev Premi <spremi@ymail.com>
#
# Available under terms of the BSD-3-Clause license.
#

import json
import falcon


class Version():
    """
    Return current version.
    """

    def on_get(self, req, res):
        result = {
            'ver': '0.0.1'
        }

        res.body = json.dumps(result)
        res.status = falcon.HTTP_200
