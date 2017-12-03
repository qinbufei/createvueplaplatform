  <template>
    <div id="firstcomponent">
      <h1>this is second component.</h1>
      <a>written by {{author}}</a>
      <p>感谢<a href="https://jinkey.ai/post/tech/vue2.0-xin-shou-wan-quan-tian-keng-gong-lue-cong-huan-jing-da-jian-dao-fa-bu">Jinkey intelligence</a>的技术指导</p>
    </div>
  </template>

  <script type="text/javascript">
    export default{
      data(){
        return {
          author:"Li Jing",
        }
      }
    }
  </script>

  <style>

  </style>
