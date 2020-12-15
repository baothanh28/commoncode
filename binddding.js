
    var me=this;

// A $( document ).ready() block.
$( document ).ready(function() {
    var data={
        d1:'t1',
        d2:'t2',
        d3:'t3'
    }
    var binddingData=function(id,data){
        var me=this,
            arr=[];
        arr=getControlBindding(id);
        arr.forEach(function(node){
            var content=getBinddingContent(node.getAttribute('DataTemp'),data);
            binddingToHtml(node,content);
        })
    
    }
    var getControlBindding=function(id){
        var me=this;
        // return document.querySelectorAll(`${id} [DataTemp]`);
        return document.querySelectorAll('[DataTemp]');
    }
    
    var getBinddingContent=function(temp,data){
        var me=this,
            res='',
            hasNull=false;
        if(temp==null||typeof temp=='undefined'){
                return res;
            }
        res= temp.replace(/\$\{([^\}]+)?\}/g, function($1, $2) { 
            if(data[$2]==null||typeof data[$2]=='undefined'){
                hasNull=true;
            }
            return data[$2]; 
        });
        return hasNull?'':res;
    
    }
    
    var binddingToHtml=function(node,content){
        var me=this;
        if(node.getAttribute('IsDateTime')){
            node.innerText='Chuyeenr thanh date time';
            return;
        }
        if(node.getAttribute('AddBr')){
            node.innerText='';
            var brTag=document.createElement('br');
            node.appendChild(brTag);
            return;
        }
       node.innerText=content;
    }
    binddingData('helloworld',data);
});
