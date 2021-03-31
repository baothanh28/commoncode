import { toRefs, reactive } from "vue";
export default function useExtend(proxyObj,obj){
    console.log('run')
    const newExtends=reactive(obj);
    //const ss=toRefs(obj);
    return { 
        ...toRefs(newExtends),
        ...toRefs(proxyObj)
    };
};