import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { NgbDropdown, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Dbservice } from '../../core/services/dbservice.service';
import Swal from 'sweetalert2';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgbModule, NgbDropdown, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  equipamentos: any = {};
  componentes: any = {};

  showComponents: any;

  equipamentoForm!: FormGroup;
  equipamentoId!: number;

  submitted: boolean = false;

  markeds: any[] = [];

  constructor(
    private _dbService: Dbservice,
    private _modalService: NgbModal,
    private fb: FormBuilder
  ) {
    this.equipamentoForm = this.fb.group({
      nome: ['', Validators.required],
      idsComponentes: this.fb.array([Validators.required]),
    });
  }

  get idsComponentes() {
    return this.equipamentoForm.get('idsComponentes') as FormArray;
  }

  addComponente() {
    this.idsComponentes.push(this.fb.control(''));
  }

  removeComponente(index: number) {
    if (this.idsComponentes.length <= 1) return;
    this.idsComponentes.removeAt(index);
  }

  ngOnInit() {
    this.fetchEquipamentos();

    this.fetchComponentes();
  }

  open(content: TemplateRef<any>) {
    this._modalService.open(content, { centered: true });
  }

  toggleComponent(i: any) {
    if (this.showComponents === i) this.showComponents = null;
    else this.showComponents = i;
  }

  fetchComponentes() {
    this._dbService.getAllComponentes().subscribe((comps) => {
      this.componentes = comps;

      console.log(this.componentes);
    });
  }

  // EQUIPAMENTOS START ================================
  fetchEquipamentos() {
    this._dbService.getAllEquipamentos().subscribe((equips) => {
      this.equipamentos = equips;

      console.log(this.equipamentos);
    });
  }

  submitEquipamento() {
    this.submitted = true;

    if (this.equipamentoForm.invalid) {
      setTimeout(() => {
        this.submitted = false;
      }, 3000);

      return;
    }

    if (this.equipamentoForm.valid) {
      const idsComponentesArray =
        this.equipamentoForm.get('idsComponentes')?.value;

      const idsComponentesObjetos = idsComponentesArray.map((id: any) => ({
        id,
      }));

      const newEquip = {
        nome: this.equipamentoForm.get('nome')?.value,
        componentes: idsComponentesObjetos,
      };

      this._dbService.addEquipamento(newEquip).subscribe({
        next: (response) => {
          if (response) {
            this._modalService.dismissAll();
            this.sucessAlert('Componente adicionado!');

            this.fetchEquipamentos();
          }
        },
        error: (error) => {
          if (error) {
            console.error('Erro ao adicionar componente:', error);

            this.errorAlert();
          }
        },
      });
    }
  }

  showEditEquipamentoModal(id: any) {
    this.equipamentoId = id;
  }
  editEquipamento() {
    this.submitted = true;

    if (this.equipamentoForm.invalid) {
      setTimeout(() => {
        this.submitted = false;
      }, 3000);

      return;
    }

    if (this.equipamentoForm.valid) {
      const newComponent = {
        nome: this.equipamentoForm.get('nome')?.value,
        componentes: this.equipamentoForm.get('componentes')?.value,
      };

      this._dbService
        .editEquipamento(this.equipamentoId, newComponent)
        .subscribe({
          next: (response) => {
            if (response) {
              this._modalService.dismissAll();
              this.sucessAlert('Componente atualizado!');

              this.fetchEquipamentos();
            }
          },
          error: (error) => {
            if (error) {
              console.error('Erro ao atualizar componente:', error);

              this.errorAlert();
            }
          },
        });
    }
  }

  async deleteEquipamento() {
    if (this.markeds.length <= 0) {
      this.interrogationAlert('Opss', 'Selecionou algo para excluir?');
      return;
    }

    for (const id of this.markeds) {
      const result = await this.deleteAlert(id);

      if (result.isConfirmed) {
        try {
          const response = await this._dbService
            .removeEquipamento(id)
            .toPromise();

          if (response) {
            this._modalService.dismissAll();
            this.sucessAlert('Equipamento deletado!');
            await this.fetchEquipamentos();
          }
        } catch (error) {
          console.error('Erro ao deletar equipamento:', error);
          this.errorAlert();
        }
      }
    }
  }

  addToMarkeds(id: any, $event: any) {
    const isChecked = $event.target.checked;
    console.log(isChecked);

    const index = this.markeds.indexOf(id);

    if (isChecked) {
      if (index === -1) {
        this.markeds.push(id);
      }
    } else {
      if (index !== -1) {
        this.markeds.splice(index, 1);
      }
    }

    console.log(this.markeds);
  }
  // EQUIPAMENTOS END ================================

  errorAlert() {
    Swal.fire({
      title: 'Error!',
      text: 'Aconteceu um erro, tente novamente!',
      icon: 'error',
      confirmButtonText: 'Ok',
    });
  }

  sucessAlert(message: string) {
    Swal.fire({
      title: 'Sucesso!',
      text: message,
      icon: 'success',
      confirmButtonText: 'Ok',
    });
  }

  deleteAlert(id: any) {
    return Swal.fire({
      title: 'Tem certeza?',
      text: 'Deletando o item: '+id,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Deletar',
    });
  }

  interrogationAlert(title: string, message: string) {
    Swal.fire({
      title: title,
      text: message,
      icon: 'question',
      confirmButtonText: 'Vou selecionar!',
    });
  }
}
