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
   $('.datepicker').datepicker();
	
	Tools.toggleFilter('.toggle-title');
//	new TimerTabsCtrl(opt);
    new SimpleGallery(opt);
    RD.MenuController.init();
});