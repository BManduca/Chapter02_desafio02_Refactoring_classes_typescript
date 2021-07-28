import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface DataFood {
  id: number,
  image: string,
  name: string,
  description: string,
  price: number,
  available: boolean
}

interface PropsModalEditFood {
  isOpen: boolean,
  setIsOpen: () => void,
  editingFood: DataFood,
  handleUpdateFood: (data: DataFood) => void
}

const ModalEditFood = ({ isOpen, setIsOpen, editingFood, handleUpdateFood }: PropsModalEditFood) => {
  const formRef = useRef(null); //recebendo valor inicial

  const handleSubmit = async (data: DataFood) => {
    handleUpdateFood(data);
    setIsOpen();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );

};

export default ModalEditFood;
