function showObj(){
	//alert(this.name+" \n "+this.content+" \n "+this.dept+" \n "+this.time+" \n ");
	alert(this.name);
}

//公告提交后返回一个announcement类的对象，
//name公告名称，conten公告内容，time公告发布时间，department公告发布对象部门
function announcementSubmit(name1,content1,dept)
{
	//alert(name1+" "+content1+" "+dept);
	var anouncement = new Object(); //创建对象 
	
	anouncement.name=name1;
	anouncement.content=content1;
	anouncement.department=dept;

	var d = new Date();
	anouncement.time=d.toUTCString();

	//alert(anouncement.name+"\n"+anouncement.content+"\n"+anouncement.dept+"\n"+anouncement.time);

	return anouncement;
}
