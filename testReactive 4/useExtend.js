import { toRefs, reactive } from "vue";
export default function useExtend(proxyObj,obj){
    console.log('run')
    //co the set default obj o day hoac th
    const newExtends=reactive(obj);
    //const ss=toRefs(obj);
    return { 
        ...toRefs(newExtends),
        ...toRefs(proxyObj)
    };
};
