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
    props:{
        assignments: {
            type: Array,
            required: true
        }
    },
    methods: {
        add() {
            this.assignments.push(
                {
                    name: this.newAssignment,
                    complete: false,
                    id: this.assignments.length + 1
                })
            this.newAssignment = '';
        }
    }

}