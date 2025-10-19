function numberWithSpaces(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
}

$( function() {
	$( "#slider-range-min" ).slider({
	  range: "min",
	  value: 0,
	  min: 0,
	  max: 300000000,
	  slide: function( event, ui ) {
	    $( "#amount" ).val( numberWithSpaces(ui.value)  + ' сум');
	    $( ".inpt_1 input" ).val(ui.value)
	  }
	});
	$( "#amount" ).val( $( "#slider-range-min" ).slider( "value" ) + ' сум');
	$( ".inpt_1 input" ).val( $( "#slider-range-min" ).slider( "value" ));
	
	$('.calc_btn').on('click', function(){
		let credit = $('.data_time>div').eq(0).find(':selected').val()
		let procent = $('.data_time>div').eq(1).find(':selected').val()
		let platej = parseFloat($('.data_time>div').eq(2).find(':selected').val())
			
			$('.inpt_2 input').val(credit)
			$('.inpt_3 input').val(procent)
			$('.bid span').text(procent)
			$('.inpt_4 select').get(0).selectedIndex = platej;
			
			$('.inpt_6 input').trigger('click')
			
			let tot = $('.calc-results #res1').text()
				$('.m_pay_sum span').text(numberWithSpaces(tot))
	})
	
} );