import { toRefs, reactive } from "vue";
export default function useExtend(proxyObj,obj){
    return { 
        ...toRefs(reactive(obj)),
        ...proxyObj
    };
};