import {ref } from 'vue';

const initComponent=()=>{
    console.log('run component from base form');
}
const initStart=()=>{
    console.log('run start from base form');
}
const initParams=()=>{
    console.log('run params from base form');
}
const initTitle=()=>{
    console.log('run titles from base form');
}
const reset=()=>{
    console.log('run reset from base form');
}
const loadFormData=()=>{
    console.log('load form data from base form');
}
const loadFormEnd =()=>{
    console.log('load form end from base form');
}

const useBaseForm=(overrideObj)=>{
    return ()=>{
        //thuwjc hien deepcopy  overrideObj de ko bi thay doi

        const isFirsLoad=ref(true);

        if(overrideObj && overrideObj.initComponent){
            overrideObj.initComponent();
        }else{
            initComponent();
        }
        if(overrideObj &&overrideObj.initStart){
            overrideObj.initStart();
        }else{
            initStart();
        }

        if(isFirsLoad.value){
            if(overrideObj && overrideObj.initParams){
                overrideObj.initParams();
            }else{
                initParams();
            }
            if( overrideObj &&overrideObj.initTitle){
                overrideObj.initTitle();
            }else{
                initTitle();
            }
            if(overrideObj && overrideObj.reset){
                overrideObj.reset();
            }else{
                reset();
            }
          
            isFirsLoad.value=false;
        }
        if(overrideObj && overrideObj.loadFormData){
            overrideObj.loadFormData();
        }else{
            loadFormData();

        }
        if(overrideObj && overrideObj.loadFormEnd){
            overrideObj.loadFormEnd();
        }else{
            loadFormEnd();
        }
        return {isFirsLoad}
    }
}
export default useBaseForm; 