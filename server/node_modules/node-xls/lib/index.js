(function() {
  var Builder, NodeXls, exporter;

  exporter = require("excel-export");

  Builder = require("./Builder");

  NodeXls = (function() {
    function NodeXls() {
      this.builder = new Builder();
    }

    NodeXls.prototype.json2xls = function(data, opt) {
      var conf;
      conf = this.builder.build(data, opt);
      return exporter.execute(conf);
    };

    return NodeXls;

  })();

  module.exports = NodeXls;

}).call(this);
