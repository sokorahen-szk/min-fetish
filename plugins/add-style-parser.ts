import Vue from 'vue'

export const addStyleParser =  (styles: any) => {
  let obj: Array<String> = [];

  Object.keys(styles).forEach( (attrName) => {
    obj.push(`${attrName}: ${styles[attrName]}`);
  });

  return obj.join(';');
}

Vue.prototype.$addStyleParser = addStyleParser;