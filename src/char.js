import { useRecoilValue , selector , atom } from "recoil";

export default function CharacterCount() {

    const textState = atom({
        key: 'textState', // unique ID (with respect to other atoms/selectors)
        default: '', // default value (aka initial value)
      });

    const charCountState = selector({
        key: 'charCountState', // unique ID (with respect to other atoms/selectors)
        get: ({get}) => {
          const text = get(textState);
      
          return text.length;
        },
      }); 

    const count = useRecoilValue(charCountState);
  
    return <>Character Count: {count}</>;
  }