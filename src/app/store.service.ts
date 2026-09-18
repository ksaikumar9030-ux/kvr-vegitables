import {Injectable,signal,computed} from '@angular/core';
import {Product} from './models';
@Injectable({providedIn:'root'})
export class StoreService{
 products:Product[]=[
 {id:1,name:'Potato',group:'Vegetable',category:'Vegetables',price:40,unit:'kg',stock:80,image:'assets/potato.svg',featured:true,description:'Fresh quality potatoes for everyday cooking.'},
 {id:2,name:'Tomato',group:'Vegetable',category:'Vegetables',price:55,unit:'kg',stock:65,image:'assets/tomato.svg',featured:true,description:'Fresh ripe tomatoes selected for daily kitchen use.'},
 {id:3,name:'Onion',group:'Vegetable',category:'Vegetables',price:48,unit:'kg',stock:72,image:'assets/onion.svg',featured:true,description:'Firm fresh onions with good flavour and freshness.'},
 {id:4,name:'Carrot',group:'Vegetable',category:'Vegetables',price:70,unit:'kg',stock:45,image:'assets/carrot.svg',description:'Crunchy fresh carrots, ideal for curries and salads.'},
 {id:5,name:'Cabbage',group:'Vegetable',category:'Vegetables',price:38,unit:'kg',stock:42,image:'assets/cabbage.svg',description:'Fresh green cabbage for curries, stir fry and salads.'},
 {id:6,name:'Cauliflower',group:'Vegetable',category:'Vegetables',price:65,unit:'kg',stock:30,image:'assets/cauliflower.svg',description:'Fresh cauliflower heads, carefully selected.'},
 {id:7,name:'Dry Anchovies / Nethili',group:'Dry Fish',category:'Dry Sea Fish',price:480,unit:'kg',stock:24,image:'assets/nethili.svg',featured:true,description:'Clean naturally dried nethili with rich traditional flavour.'},
 {id:8,name:'Dry Sardines',group:'Dry Fish',category:'Dry Sea Fish',price:420,unit:'kg',stock:31,image:'assets/sardines.svg',featured:true,description:'Sun-dried sardines for traditional curries and fry.'},
 {id:9,name:'Dry Prawns',group:'Dry Fish',category:'Dry Sea Fish',price:950,unit:'kg',stock:14,image:'assets/prawns.svg',description:'Aromatic dried prawns, cleaned and packed.'},
 {id:10,name:'Dry Mackerel',group:'Dry Fish',category:'Dry Sea Fish',price:560,unit:'kg',stock:18,image:'assets/mackerel.svg',description:'Firm-textured dry mackerel with strong seafood flavour.'},
 {id:11,name:'Dry Ribbon Fish',group:'Dry Fish',category:'Dry Sea Fish',price:620,unit:'kg',stock:12,image:'assets/ribbon-fish.svg',description:'Premium ribbon fish carefully dried and packed.'}
 ];
 private cart=signal<{product:Product,qty:number}[]>([]);
 cartCount=computed(()=>this.cart().reduce((s,i)=>s+i.qty,0)); cartTotal=computed(()=>this.cart().reduce((s,i)=>s+i.qty*i.product.price,0)); items=this.cart.asReadonly();
 add(p:Product){const a=this.cart(),f=a.find(i=>i.product.id===p.id);f?this.cart.set(a.map(i=>i.product.id===p.id?{...i,qty:i.qty+1}:i)):this.cart.set([...a,{product:p,qty:1}])}
 update(id:number,q:number){q<=0?this.remove(id):this.cart.set(this.cart().map(i=>i.product.id===id?{...i,qty:q}:i))}
 remove(id:number){this.cart.set(this.cart().filter(i=>i.product.id!==id))} clear(){this.cart.set([])}
}