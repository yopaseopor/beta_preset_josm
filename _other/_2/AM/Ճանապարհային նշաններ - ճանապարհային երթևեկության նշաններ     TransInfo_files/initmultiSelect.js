// JavaScript Document
var initmultiSelect = function(){
								var _initSelects={ oneOrMoreSelected: '*',noneSelected:_noneSelected,selectAllText:_selectAllText};
								$("#filed_state").multiSelect(_initSelects);
								$("#filed_body").multiSelect(_initSelects);
								$("#filed_drive").multiSelect(_initSelects);
								$("#filed_warranty").multiSelect(_initSelects);
								$("#filed_color").multiSelect(_initSelects);
								
								$("#filed_rudder").multiSelect(_initSelects);
								$("#filed_gearbox").multiSelect(_initSelects);
								$("#filed_customs").multiSelect(_initSelects);
								$("#filed_bargaining").multiSelect(_initSelects);
								$("#filed_fuel").multiSelect(_initSelects);
							};