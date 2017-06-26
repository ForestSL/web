//公告提交后返回一个announcement类的对象，
//name公告名称，conten公告内容，time公告发布时间，department公告发布对象部门
function announcementSubmit(name1,content1,dept)
{
	//alert(name1+" "+content1+" "+dept);
	var anouncement = new Object(); //创建对象 
	
	anouncement.name=name1;
	anouncement.content=content1;
	anouncement.departName=dept;
	anouncement.time = "";

	//alert("asfa");
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	anouncement.time+=year+"."+month+"."+day+"\t"+hour+":"+minute+":"+second;
	//alert(anouncement.time);

	//alert(anouncement.name+"\n"+anouncement.content+"\n"+anouncement.departName+"\n"+anouncement.time);

	return anouncement;
}
