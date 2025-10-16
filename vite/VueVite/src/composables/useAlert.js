import Swal from 'sweetalert';

export function useAlert() {
    function showAlert() {
        return Swal({
            title: 'Welcome!',
            text: 'This is a reactive component using SweetAlert',
            icon: 'success',
        });
    }
    return { showAlert };
}

