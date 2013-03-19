var mygrid =null;
$(function() {
	
	mygrid = new dhtmlXGridObject('gridbox');
	mygrid.setImagePath(dhtmlx_img_path);
	// 去掉观光座、一等包座
	mygrid.setHeader("<div style='text-align:center;'>车次&nbsp;&nbsp;</div>,<div style='text-align:center;'>查询区间</div>,#cspan,#cspan,<div style='text-align:center;'>余票信息</div>,#cspan,#cspan,#cspan,#cspan,#cspan,#cspan,#cspan,#cspan,#cspan,#cspan,<div style='text-align:center;'>备注&nbsp;&nbsp;</div>");
	mygrid.attachHeader("#rspan,发站,到站,历时,商务座,特等座,一等座,二等座,高级软卧,软卧,硬卧,软座,硬座,无座,其他,#rspan");
	mygrid.setInitWidths("62,96,96,52,48,48,48,48,62,42,42,42,42,42,42,114");
	mygrid.setColAlign("center,center,center,center,center,center,center,center,center,center,center,center,center,center,center,center");
	mygrid.setColTypes("ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro");
	mygrid.enableTooltips("false");

	mygrid.init();
	mygrid.enableAlterCss("even","uneven");
	mygrid.setSkin("light");
   
	mygrid.parse(new Array(),"jsarray");
	dhtmlxError.catchError("parse",function(a,b,data){
//		renameButton('research_u');
//		nmg_renameButton('research_u');
		$("#submitQuery").click(sendQueryFunc);
//		if(canBuyStudentTicket=='Y'){
//			stu_renameButton('research_u');
//			$("#stu_submitQuery").attr("disabled",false);
//		}
		
    });
	//新加校验学生查询按钮。
	if(!isStudentTicketDateValid()){
		$("#stu_submitQuery").attr("disabled",true);
	}
	//绑定查询按钮单击事件开始
	$("#submitQuery").click(sendQueryFunc);
	$("#stu_submitQuery").click(sendQueryFunc);
	$("#nmg_submitQuery").click(sendQueryFunc);
	//绑定查询按钮单击事件开始
//	if(isStudentTicketDateValid()){
//		canBuyStudentTicket='Y';
//		$("#stu_submitQuery").attr("disabled",false);
//	}else{
//		canBuyStudentTicket='N';
//		stu_invalidQueryButton();
//	}
	 

	 $("#seatType").change(function() {
		 $("#seatNum").val("0");
		});

	 
	 $("#seatNum").change(function() {
		    var currentSelected = $(this).find("option:selected");
		    if(currentSelected.val()!=0){
			addSeatTypeAndNum("#seatType", "#seatNum", "#seatAddResult");
		    }
		});
	 
	 //车次改变清空预订席别数量
	 $("#trainCodeText").change(function(event){
		 $("#seatAddResult").empty();
	 });
	 
	 
	//列车等级改变清空预订席别数量
	 if($(":checkbox[name='trainClassArr']").length>0){
	 $(":checkbox[name='trainClassArr']").each(function(index,dom){
			 $(dom).click(function(){
				 $("#seatAddResult").empty();
				 $("#seatNum").val("0"); 
			 });
		 });
      };
	
    
});

String.prototype.replaceAll  = function(s1,s2){   
    return this.replace(new RegExp(s1,"gm"),s2);
};

