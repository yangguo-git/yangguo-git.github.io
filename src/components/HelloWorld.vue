<template>
  <div class="hello">
    <img src="../assets/2.jpg" alt="" >
    <img src="../assets/1.jpg" alt="" style="transform: scale(0.5);">
    <img src="../assets/1.jpg" alt="" style="transform: scale(0.5);">
    <img src="../assets/1.jpg" alt="" style="transform: scale(0.5);">
    <!-- <img src="../assets/1.jpg" alt="" style="width: 360px;height: 640px;"> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,

  },
  data() {
    return {
      isActive:false,
      isError:true,
      flag:false,
      testStr:'',
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ], 
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],

    }
  },
  methods: {
    insertChar(str, char, position) {
      return str.substr(0, position) + char + str.substr(position);
    },
    handleClick(){
      this.flag = !this.flag
      let test = this.flag ? '_hd':''
      let str = `https://txliveplay.cmcc-cs.cn/cmlive/149409_8549250c8ddf436b6c0b6236ac083b3c${test}.m3u8`
      this.testStr = str
      console.log(this.testStr)
    },
    formateSeconds(endTime) {
      let secondTime = parseInt(endTime)//将传入的秒的值转化为Number
      let min = 0// 初始化分
      let h = 0// 初始化小时
      let result = ''
      if (secondTime >= 60) {//如果秒数大于等于60，将秒数转换成整数
        min = parseInt(secondTime / 60)//获取分钟，除以60取整数，得到整数分钟
        secondTime = parseInt(secondTime % 60)//获取秒数，秒数取佘，得到整数秒数
        if (min >= 60) {//如果分钟大于等于60，将分钟转换成小时
          h = parseInt(min / 60)//获取小时，获取分钟除以60，得到整数小时
          min = parseInt(min % 60) //获取小时后取佘的分，获取分钟除以60取佘的分
        }
      }
      if (h) {
        result = `${h.toString().padStart(2, '0')}时${min.toString().padStart(2, '0')}分${secondTime.toString().padStart(2, '0')}秒`
      } else if (min) {
        result = `${min.toString()}分${secondTime.toString().padStart(2, '0')}秒`
      } else {
        result = `${secondTime.toString().padStart(2, '0')}秒`
      }
      return result
    }

  },
  created() {
    debugger
    // let str = 'https://txliveplay.cmcc-cs.cn/cmlive/149409_8549250c8ddf436b6c0b6236ac083b3c.flv'
    //           //  https://txliveplay.cmcc-cs.cn/cmlive/149409_8549250c8ddf436b6c0b6236ac083b3c_hd.flv
    // let s1 = this.insertChar(str,'_hd',str.lastIndexOf('.'))
    // let s2 = str.replace('.flv','_hd.flv')
    // console.log(s1)
    // console.log(s2)
    // console.log(''== 0)
    // let a = '0'
    // console.log((a === '' || a == 1 ))
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
