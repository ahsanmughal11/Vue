export default {
    template: `<div>
                <form @submit.prevent="add">
                    <input type="text" placeholder="New Assignment" v-model="newAssignment">
                    <button type="submit">Add</button>
                </form>
            </div>`,
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add(){
            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
        }
    }

}