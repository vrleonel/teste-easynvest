module.exports = function(){

  var pluginName = "Easynvest",
    errorTypes = {
      "erro"     : " Erro 1 ",
      "error2"   : "Erro 2"
    };

  /**
  * @module error
  * @method showError
  * @desc Show a customized warning
  * @param {string=} type - a white list of error from obj errorTypes
  * @param {string=} msg - a customized error message
  **/
  var showError = function(type, msg) {
    console.warn(
      "[" + pluginName + "]",
      errorTypes[type] || errorTypes["default"],
      msg || "" );
  };

	return {
    showError : showError
	}
}
