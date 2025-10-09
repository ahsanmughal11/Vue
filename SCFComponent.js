
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        counting: {
            type: Number,
            required: false,
        },
        arrayprop: {
            type: Array,
            required: false,
        }
    },
    template: `<h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <p>{{ counting }}</p>
    <ul>
    <li v-for="item in arrayprop">{{item}}</li>
    </ul>`
}
