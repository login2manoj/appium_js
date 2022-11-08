class Calpage{
/**
 * define selectors using getter methods
 */
get btnFour(){return $('~4');}
get btnFive(){return $('~5');}
get btnPlus(){return $('~plus');}
get btnEquals() {return $('~equals');}
get resvalue() {return $('//android.widget.TextView[@resource-id="com.google.android.calculator:id/result_final"]');}
}
module.exports = new Calpage();
