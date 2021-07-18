class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }

    getProducts() {
        const prdouctsLocalStorage = localStorage.getItem(this.keyName);
        if (prdouctsLocalStorage !== null) {
            return JSON.parse(prdouctsLocalStorage);
        } else {return [];}
    }

    putProducts(id) {
        let products = this.getProducts();
        let pushProduct = false;
        const index = products.indexOf(id);

        if (index === -1) {
            products.push(id);
            pushProduct = true;
        } else {
            products.splice(index, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(products));
        
        return {
            pushProduct: pushProduct,
            products: products //Если у объекта ключ и значение совпадают, то можно сократить
        };
    
    }
}

const localStorageUtil = new LocalStorageUtil();
