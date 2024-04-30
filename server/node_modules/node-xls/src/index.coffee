

exporter = require "excel-export"
Builder = require "./Builder"

class NodeXls
    constructor: ()->
        @builder = new Builder()

    json2xls: (data, opt)->
        conf = @builder.build data, opt
        return exporter.execute conf


module.exports = NodeXls