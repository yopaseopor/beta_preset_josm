var filed_car_brand_dd = null;
var filed_car_brand_model_dd = null;
$(function() {

	
	/*$("#toggle").click(function() {
		$("#combobox").toggle();
	});

	filed_car_brand_dd = $("#filed_car_brand").msDropdown().data("dd");
	filed_car_brand_model_dd = $("#search_filed_car_brand_model").msDropdown().data("dd");
	 */
	$("#slider-range").slider({
		range : true,
		min : 0,
		max : 100000,
		//values : [ 0, 60000 ],
		slide : function(event, ui) {
			
			
			$("#amount").html(ui.values[0] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + ui.values[1]);
			$("#amount2").val(ui.values[0]);
			$("#amount3").val(ui.values[1]);
		}
	});
    $( "#slider-range" ).slider({ step: 100 });
    
	$("#amount").html($("#slider-range").slider("values",0) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + $("#slider-range").slider("values",1));
	$("#slider-range").slider("values",
			[ $("#amount2").val(), $("#amount3").val() ]);

	$("#amount3").bind('change blur', function() {
		var selfValue = parseInt(this.value);

		var lowAmount = $("#amount2").val();

		var maxAmount = $("#slider-range").slider("option", 'max');

		if (isNaN(selfValue)) {
			selfValue = maxAmount;
		}
		if (selfValue < lowAmount) {
			selfValue = lowAmount;
		}

		if (selfValue > maxAmount) {
			selfValue = maxAmount;
		}
		this.value = selfValue;

		$("#slider-range").slider("values", [ lowAmount, selfValue ]);

	});

	$("#year1").bind('change blur', function() {
		var selfValue = parseInt(this.value);
		if (isNaN(selfValue)) 
		{
			selfValue = 1990;
		}
		if (selfValue < 1900) {
			selfValue = 1900;
		}

		var maxYear = $("#year2").val();
		if (selfValue > maxYear) {
			selfValue = maxYear;
		}
		this.value = selfValue;

	});
	$("#year2").bind('change blur', function() 
	{
		var selfValue = parseInt(this.value);
		
		var d = new Date();
		if (isNaN(selfValue)) {
			
			selfValue = d.getFullYear();
		}
		
		if(selfValue > d.getFullYear())
		{
			selfValue = d.getFullYear();
		}
		
		var minYear = $("#year1").val();

		if (selfValue < minYear) 
		{
			selfValue = d.getFullYear();
		}
		this.value = selfValue;

	});

	$("#amount2").bind('change blur', function() {
		var selfValue = parseInt(this.value);

		var highAmount = $("#amount3").val();

		var minAmount = $("#slider-range").slider("option", 'min');

		if (isNaN(selfValue)) {
			selfValue = minAmount;
		}

		if (selfValue > highAmount) {
			selfValue = highAmount;
		}

		if (selfValue < minAmount) {
			selfValue = minAmount;
		}
		this.value = selfValue;

		$("#slider-range").slider("values", [ selfValue, highAmount ]);

	});

});