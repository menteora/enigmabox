
import { PRODUCTS } from '../../../constants';

export default {
  /**
   * Specifica a Vike quali URL generare staticamente durante la build per la rotta @id.
   * Restituiamo un array di stringhe corrispondenti ai path dei prodotti esistenti.
   */
  onBeforePrerenderStart() {
    return PRODUCTS.map((product) => `/products/${product.id}`);
  },
};
