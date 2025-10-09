
export default {
 props: {
  title: {
    type: String,
    required: true
   },
  content: {
   type: String,
   required: true
   }
  },
 template: '<h2>{{ title }}</h2><p>{{ content }}</p>'
}
