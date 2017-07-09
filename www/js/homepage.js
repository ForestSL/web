//====================tree=================
$(function () {
  $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
  $('.tree li.parent_li > span').on('click', function (e) {
      var children = $(this).parent('li.parent_li').find(' > ul > li');
      if (children.is(":visible")) {
          children.hide('fast');
          $(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
      } else {
          children.show('fast');
          $(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
      }
      e.stopPropagation();
  });
});

//创建当前部门的子部门节点，pName，pId分别为当前部门的名字和id
function createChildrenNode(pName,pID)
{
  //alert(pName);
  var req = new Object(); //创建Post对象
  req.departName = pName;
  //req.departID = pId;

  $.ajax({
        type : 'POST',    
        url: 'http://115.159.38.100:3000/depart/search/children',  
        dataType : "json",  
        data: req,  

        success : function(data) {   
        //alert("2222);
        if (data != "null"){
          var agr = "ul#"+pID;//agr to append
          var dept_list = data;  
          var opts = "";  

          for( var dept_index = 0 ; dept_index < dept_list.length; dept_index++ ){  
            //画本节点
            var dName = dept_list[dept_index].departName;
            var dID = dept_list[dept_index].departID;
            if(dName == null)continue;
            opts += "<li>" + "<span><i class=\"glyphicon glyphicon-leaf\"></i>" + dName + "</span> ";
            opts += "<i class=\"glyphicon glyphicon-pencil\" onclick=\"edit(\'"+ dID + "\')\"></i>";
            opts += "<i class=\"glyphicon glyphicon-plus\" onclick=\"add(\'"+ dName + "\')\"></i> ";  
            opts += "<i class=\"glyphicon glyphicon-trash\" onclick=\"del(\'"+ dName + "\')\"></i> ";
            opts += "<a href=\"departmentPage.html?agr=" + dID + "\">详情</a>";
           // opts += "<a href=\"departmentPage.html?agr=aaaaa\">详情</a>";  
            opts += "<ul id =\"" + dID  +"\">" +"</ul></li>"; 


            $(agr).append(opts);
            opts = "";
            //画该节点的子节点
  
            createChildrenNode(dName,dID);

          }//===for
        }
         }//==sucess function       
      }); //====ajax  */
}