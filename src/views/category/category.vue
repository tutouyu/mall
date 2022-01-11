<template>
  <div class="category">
    <navbar class="title">
      <div slot="center">
        分类
      </div>
    </navbar>
    <tableMenue :categories="categories" @itemclick="itemclick"></tableMenue>
    <tablecontent :categoriesProduct="categoriesProduct"></tablecontent>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar/navbar.vue";
import { getCategory, getSubcategory} from '@/network/category';
import tableMenue from "./categoryChild/tableMenue.vue"
import tablecontent from "./categoryChild/tablecontent"
export default {
  data(){
    return{
        categories: [],
        categoriesProduct: [],
        categoryData: {
      },
    }
  },
  created(){
    this._getCategory();
  },
  methods:{
       _getCategory(){
      getCategory().then(res => {
        // 1.获取分类数据
        this.categories = res.data.category.list
        console.log(this.categories)
        // 3.请求第一个分类的数据
        this._getSubcategory(0)
      })
    },
    _getSubcategory(index){
      this.currentIndex = index;
      const maitKey = this.categories[index].maitKey;
      getSubcategory(maitKey).then(res => {
        this.categoriesProduct = res.data.list;
      })
    },
    itemclick(index){
      this._getSubcategory(index);

    },
  },
  components:{
    navbar,
    scroll,
    tableMenue,
    tablecontent,
  }
 }
</script>

<style scoped>
.title{
  background-color: var(--color-tint);
  color: white;
}
</style>