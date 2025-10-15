import Swal from 'sweetalert';
export default {
    methods: {
        showAlert() {
            return Swal({
                title: 'Welcome!',
                text: 'This is a reactive component using SweetAlert',
                icon: 'success',
            });
        }
    }
}