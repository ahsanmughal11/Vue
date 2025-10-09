export default{
    template: `<button :class="btnClass">Click me</button>`,
    props: {
        btnClass: {
            type: String,
            required: true
        }
    }
}