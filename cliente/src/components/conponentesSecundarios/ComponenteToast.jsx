import React, { Component } from 'react';
import {Toast,ToastBody,ToastHeader} from "reactstrap";

class ComponenteToast extends Component {
    render() {
        return (
            <div>
                <div className="p3 my-2 rounded">
                    <Toast>
                        <ToastHeader icon="primary">
                            Notificacion
                        </ToastHeader>
                        <ToastBody>
                            Tarea Guarda...
                        </ToastBody>
                    </Toast>
                </div>
            </div>
        );
    }
}

export default ComponenteToast;