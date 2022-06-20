

const cal = "../Images/cal_1957.jpg";

//main vue component to show text when 1957 cal baseball image is hovered
  Vue.createApp({
    data() {
      return {
        message: '',
        image: cal,
        message2: 'UC Berkeley Baseball Team, National Champions (1957)'
        
      }
    },

    methods: {
      displayMSG() {
        this.message = this.message2
      },

      removeMSG(){
        this.message = ''
      }
    },
  }).mount('#app')
