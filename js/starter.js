/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 05.11.13
 * Time: 19:05
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
   var opt = {
       wrap:null
   };
    new TimerTabsCtrl(opt);
   $('.datepicker').datepicker();
});