$(document).ready(function()
{


$.get('https://www.prevision-meteo.ch/services/json/Toulouse', function(meteo)
{



	 // $("#lundi").click(function(){    append(lundi_show());    });
	 // $("#mardi").click(function(){    append(mardi_show());    });
	 $("#mercredi").click(function(){    append(mercredi_show());    });
	 $("#jeudi").click(function(){    append(jeudi_show());    });
	 $("#vendredi").click(function(){    append(vendredi_show());    });
	 $("#samedi").click(function(){    append(samedi_show());    });
	 $("#dimanche").click(function(){    append(dimanche_show());    });




					function mercredi_show()
					{
						var name=meteo.city_info.name;
						var day=meteo.fcst_day_0.day_long;
						var date=meteo.fcst_day_0.date;
						var icon = meteo.current_condition.icon_big;
						var tmin=meteo.fcst_day_0.tmin;
						var tmax=meteo.fcst_day_0.tmax;
						var info={
						       name:name, 
						       day:day, 
						       date:date, 
						       icon:icon, 
						       tmin:tmin,
						       tmax:tmax
					                };
						return info;
					}

					function jeudi_show()
					{
						var name=meteo.city_info.name;
						var day=meteo.fcst_day_1.day_long;
						var date=meteo.fcst_day_1.date;
						var icon = meteo.fcst_day_1.icon_big;
						var tmin=meteo.fcst_day_1.tmin;
						var tmax=meteo.fcst_day_1.tmax;
							var info={
						       name:name, 
						       day:day, 
						       date:date, 
						       icon:icon, 
						       tmin:tmin,
						       tmax:tmax,
					                };
						  return info;
					}function vendredi_show()
					{
						var name=meteo.city_info.name;
						var day=meteo.fcst_day_2.day_long;
						var date=meteo.fcst_day_2.date;
						var icon = meteo.fcst_day_2.icon_big;
						var tmin=meteo.fcst_day_2.tmin;
						var tmax=meteo.fcst_day_2.tmax;
							var info={
						       name:name, 
						       day:day, 
						       date:date, 
						       icon:icon, 
						       tmin:tmin,
						       tmax:tmax,
					                };
						return info;
					}
					function samedi_show()
					{
						var name=meteo.city_info.name;
						var day=meteo.fcst_day_3.day_long;
						var date=meteo.fcst_day_3.date;
						var icon = meteo.fcst_day_3.icon_big;
						var tmin=meteo.fcst_day_3.tmin;
						var tmax=meteo.fcst_day_3.tmax;
							var info={
						       name:name, 
						       day:day, 
						       date:date, 
						       icon:icon, 
						       tmin:tmin,
						       tmax:tmax,
					                };
						return info;
					}
					function dimanche_show()
					{
						var name=meteo.city_info.name;
						var day=meteo.fcst_day_4.day_long;
						var date=meteo.fcst_day_4.date;
						var icon = meteo.fcst_day_4.icon_big;
						var tmin=meteo.fcst_day_4.tmin;
						var tmax=meteo.fcst_day_4.tmax;
							var info={
						       name:name, 
						       day:day, 
						       date:date, 
						       icon:icon, 
						       tmin:tmin,
						       tmax:tmax,
					                };
						return info;
					}		   

					function append(info)   
					{ 
									$('#name').append(info.name);
									$('#date').append(info.day+"  "+info.date);
					                $('#i').attr('src', $('#i').attr('src').replace(/\.jpg/, '') + info.icon);           
									$('#tmin').append(info.tmin);
									$('#tmax').append(info.tmax);
					} 




});

});