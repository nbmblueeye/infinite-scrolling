import { useEffect, useRef, useState} from 'react';

type Options = {
  margin: string,
  threshold: number,
}

type Dependency = {
  totalPage: number, 
}

type Values = {
  observerRef:any, 
  observerTargetRef:any, 
  currentPage:number
}

const useObserverHook = ({ margin, threshold }:Options,{totalPage}:Dependency) => {

  const observerRef = useRef<HTMLDivElement | null>(null);
  const observerTargetRef = useRef<HTMLDivElement | null>(null);
  let [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      triggerCallback
    , 
    {
      root:observerRef.current,
      rootMargin: margin,
      threshold: threshold,
    }
    );
    if(observerTargetRef.current){
      observer.observe(observerTargetRef?.current);
    };
    return () => {
      if(observerTargetRef.current){
        observer.unobserve(observerTargetRef?.current);
      };
    };

  }, [observerRef, observerTargetRef, totalPage]);

  const triggerCallback = (entries:any):void =>{
    const [entry] = entries;
    if(entry.isIntersecting){
      setCurrentPage((prevstate) => prevstate < totalPage - 1 ? prevstate + 1:0);
    }
  }

  let values: Values = {observerRef, observerTargetRef, currentPage};
  return values;
}

export default useObserverHook