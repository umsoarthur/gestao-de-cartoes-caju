import { html, render, Component } from 'https://unpkg.com/htm@3.1.1/preact/standalone.module.js';
const C = {};
class DCLogic extends Component {
  constructor(props) { super(props); if (!this.state) this.state = {}; }
  render() { return this.tpl(this.renderVals() || {}); }
}
class Contexto extends DCLogic {
  renderVals() {
    return {};
  }
}
Contexto.defaultProps = {};
Contexto.prototype.tpl = function (v) { return html`
<div style="width: 100%; min-height: 960px; box-sizing: border-box; background: #FFFFFF; color: #3E3E3E; font-family: Figtree, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; -webkit-font-smoothing: antialiased; padding: 120px 40px">
  <section style="width: 100%; max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 56px">

    <${C.TituloSecao} numero="01" etapa="Contexto" titulo="Por que o projeto começou?" subtitulo="Uma mudança regulatória obrigou a Caju a repensar seus cartões, e abriu espaço para olhar além dela." />

    <div style="display: flex; flex-wrap: wrap; align-items: stretch; gap: 16px">

      <div style="flex: 1 1 240px; min-width: 0; display: flex; flex-direction: column; gap: 14px">
        <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #717171">O ponto de partida</p>
        <div style="flex: 1; display: flex; flex-direction: column; gap: 20px; padding: 28px; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 16px">
          <span style="align-self: flex-start; padding: 6px 12px; background: #1A1A1A; color: #FFFFFF; border-radius: 8px; font-size: 13px; font-weight: 600">Regulamentação · 2022</span>
          <h3 style="margin: 0; font-size: 26px; font-weight: 700; line-height: 1.2; letter-spacing: -0.02em; color: #1A1A1A">Nova regulamentação do Banco Central</h3>
          <p style="margin: 0; font-size: 16px; line-height: 1.55; color: #717171">Em 2022, a Caju começou a se preparar para mudanças importantes na operação dos seus cartões.</p>
        </div>
      </div>

      <div aria-hidden="true" style="flex: 0 0 24px; display: flex; align-items: center; justify-content: center; padding-top: 30px">
        <svg width="24" height="16" viewBox="0 0 24 16" fill="none"><path d="M0 8h21M15 2l6 6-6 6" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </div>

      <div style="flex: 1 1 240px; min-width: 0; display: flex; flex-direction: column; gap: 14px">
        <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #717171">Que previa</p>
        <div style="flex: 1; display: flex; flex-direction: column; gap: 20px; padding: 28px; background: #F7F7F7; border-radius: 16px">
          <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #A6A6A6">Cartão</p>
          <h3 style="margin: 0; font-size: 26px; font-weight: 700; line-height: 1.2; letter-spacing: -0.02em; color: #1A1A1A">Substituição por um modelo panless</h3>
          <p style="margin: 0; font-size: 16px; line-height: 1.55; color: #717171">Sem informações sensíveis impressas no cartão físico.</p>
          <div style="margin-top: auto; display: flex; justify-content: center; padding-top: 8px">
            <img src="/assets/b0ea6a8a37e0cb10c004df70a3bf54a4.svg" alt="Novo cartão Caju panless, na vertical, sem número, validade ou código impressos." style="display: block; width: 120px; height: auto; aspect-ratio: 251 / 353; filter: drop-shadow(0 12px 20px rgba(232, 5, 55, 0.25))" />
          </div>
        </div>
      </div>

      <div aria-hidden="true" style="flex: 0 0 24px; display: flex; align-items: center; justify-content: center; padding-top: 30px">
        <svg width="24" height="16" viewBox="0 0 24 16" fill="none"><path d="M0 8h21M15 2l6 6-6 6" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </div>

      <div style="flex: 1 1 260px; min-width: 0; display: flex; flex-direction: column; gap: 14px">
        <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #717171">Que exigiria adaptar</p>
        <div style="flex: 1; display: flex; flex-direction: column; gap: 20px; padding: 28px; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 16px">
          <h3 style="margin: 0; font-size: 26px; font-weight: 700; line-height: 1.2; letter-spacing: -0.02em; color: #1A1A1A">Jornadas de ativação e gestão de cartões no app</h3>
          <ul style="margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 8px">
            <li style="padding: 11px 14px; background: #F7F7F7; border-radius: 10px; font-size: 15px; font-weight: 500; color: #3E3E3E">Ativação do cartão físico</li>
            <li style="padding: 11px 14px; background: #F7F7F7; border-radius: 10px; font-size: 15px; font-weight: 500; color: #3E3E3E">Criação dos cartões virtuais</li>
            <li style="padding: 11px 14px; background: #F7F7F7; border-radius: 10px; font-size: 15px; font-weight: 500; color: #3E3E3E">Bloqueio e desbloqueio do físico</li>
            <li style="padding: 11px 14px; background: #F7F7F7; border-radius: 10px; font-size: 15px; font-weight: 500; color: #3E3E3E">Bloqueio e desbloqueio dos virtuais</li>
            <li style="padding: 11px 14px; background: #F7F7F7; border-radius: 10px; font-size: 15px; font-weight: 500; color: #3E3E3E">Alteração de senha</li>
          </ul>
        </div>
      </div>

      <div aria-hidden="true" style="flex: 0 0 24px; display: flex; align-items: center; justify-content: center; padding-top: 30px">
        <svg width="24" height="16" viewBox="0 0 24 16" fill="none"><path d="M0 8h21M15 2l6 6-6 6" stroke="#EA1D2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </div>

      <div style="flex: 1 1 220px; min-width: 0; display: flex; flex-direction: column; gap: 14px">
        <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #EA1D2C">E abriu espaço para</p>
        <div style="flex: 1; display: flex; flex-direction: column; gap: 20px; padding: 28px; background: #EA1D2C; border-radius: 16px">
          <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #FFFFFF; opacity: 0.8">Oportunidade</p>
          <h3 style="margin: 0; font-size: 30px; font-weight: 700; line-height: 1.15; letter-spacing: -0.02em; color: #FFFFFF">Investigar problemas que já existiam</h3>
          <p style="margin: auto 0 0; font-size: 16px; line-height: 1.55; color: #FFFFFF; opacity: 0.9">Ir além da adaptação obrigatória e atacar as fricções da gestão de cartões.</p>
        </div>
      </div>

    </div>
  </section>
</div>
`; };
C.Contexto = Contexto;

class Main extends DCLogic {
  renderVals() {
    return { detail: this.props.detail ?? '#EA1D2C' };
  }
}
Main.defaultProps = {"detail": "#EA1D2C"};
Main.prototype.tpl = function (v) { return html`
<div style="width: 100%; min-height: 860px; box-sizing: border-box; background: #F7F7F7; color: #3E3E3E; font-family: Figtree, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; -webkit-font-smoothing: antialiased; padding: 80px 40px 0; overflow: hidden">
  <section style="width: 100%; max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 48px">

    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center">
      <p style="display: inline-flex; align-items: center; gap: 8px; margin: 0 0 8px; padding: 8px 16px; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 999px; font-size: 15px; font-weight: 500; line-height: 1; color: #717171">Preparado para o processo seletivo do <img src="/assets/b94476d7f8d993ee49857d3b0edd2cd1.svg" alt="iFood" style="display: block; height: 18px; width: auto; transform: translateY(2px)" /></p>
      <h1 style="margin: 0; max-width: 940px; font-size: 72px; font-weight: 700; line-height: 1.05; letter-spacing: -0.03em; text-wrap: balance; color: #1A1A1A; width: 1074px">Melhorias nos fluxos de gestão de cartões</h1>
      <p style="margin: 0; font-size: 19px; line-height: 1.5; color: #717171; text-wrap: balance">Análise de dados e do comportamento dos usuários para evoluir as jornadas do cartão Caju.</p>
    </div>

    <div style="width: 100%; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 24px 40px">

      <div style="flex: 0 0 auto; display: flex; flex-direction: column; gap: 8px; padding: 16px 20px; margin-bottom: 72px; box-sizing: border-box; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 12px; text-align: left">
        <p style="margin: 0; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #717171">ATENDIMENTO</p>
        <p style="margin: 0; font-size: 36px; font-weight: 700; line-height: 1; letter-spacing: -0.03em; font-variant-numeric: tabular-nums; white-space: nowrap; color: ${v.detail}">−30,5%</p>
        <p style="margin: 0; font-size: 13px; line-height: 1.4; white-space: nowrap; color: #3E3E3E">nos tickets sobre gestão de cartões</p>
      </div>

      <figure style="flex: 0 1 520px; min-width: 0; margin: 0; height: 520px; overflow: hidden; -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 55%, transparent 100%); mask-image: linear-gradient(to bottom, #000 0%, #000 55%, transparent 100%)">
        <img src="/assets/013b586f9d31414bbcdf02ee19e9f55a.png" alt="Dois iPhones com o app da Caju: à esquerda, a tela de escolha do cartão recebido; à direita, o cartão físico ativado com código, validade e categorias de benefício." style="display: block; width: 100%; height: auto; aspect-ratio: 1122 / 1402" />
      </figure>

      <div style="flex: 0 0 auto; display: flex; flex-direction: column; gap: 8px; padding: 16px 20px; margin-bottom: 72px; box-sizing: border-box; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 12px; text-align: left">
        <p style="margin: 0; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #717171">ATIVAÇÃO DE CARTÕES</p>
        <p style="margin: 0; font-size: 36px; font-weight: 700; line-height: 1; letter-spacing: -0.03em; font-variant-numeric: tabular-nums; white-space: nowrap; color: ${v.detail}">−4,5 p.p.</p>
        <p style="margin: 0; font-size: 13px; line-height: 1.4; white-space: nowrap; color: #3E3E3E">na taxa de abandono de ativação</p>
      </div>

    </div>

  </section>
</div>
`; };
C.Main = Main;

class Definicao extends DCLogic {
  renderVals() {
    return {};
  }
}
Definicao.defaultProps = {};
Definicao.prototype.tpl = function (v) { return html`
<div style="width: 100%; box-sizing: border-box; background: #F7F7F7; color: #3E3E3E; font-family: Figtree, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; -webkit-font-smoothing: antialiased; padding: 120px 40px">
  <section style="width: 100%; max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 48px">

    <${C.TituloSecao} numero="04" etapa="Definição" titulo="Priorizando o que entraria no projeto" subtitulo="Com as causas mapeadas, construí uma matriz MoSCoW junto com Produto e Engenharia." />

    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 10px">
      <span style="margin-right: 4px; font-size: 13px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #717171">Critérios</span>
      <span style="padding: 7px 14px; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 999px; font-size: 14px; font-weight: 600; color: #3E3E3E">Impacto na experiência</span><span style="padding: 7px 14px; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 999px; font-size: 14px; font-weight: 600; color: #3E3E3E">Necessidade da mudança</span><span style="padding: 7px 14px; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 999px; font-size: 14px; font-weight: 600; color: #3E3E3E">Esforço de implementação</span>
    </div>

    <div style="display: flex; flex-direction: column; gap: 16px">
      <div style="display: grid; grid-template-columns: minmax(0, 7fr) minmax(0, 5fr); gap: 16px">
        <div style="display: flex; flex-direction: column; gap: 22px; padding: 40px; background: #EA1D2C;  border-radius: 20px">
          <div style="display: flex; align-items: baseline; justify-content: space-between; gap: 12px">
            <p style="margin: 0; font-size: 13px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #FFFFFF">Must have</p>
            <span style="font-size: 14px; font-weight: 500; color: rgba(255, 255, 255, 0.75)">Precisa ter</span>
          </div>
          <p style="margin: -6px 0 0; font-size: 30px; font-weight: 700; line-height: 1.15; letter-spacing: -0.02em; color: #FFFFFF">Escopo principal do projeto</p>
          <ul style="margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 12px">
            <li style="display: flex; align-items: baseline; gap: 12px; font-size: 20px; font-weight: 600; line-height: 1.4; color: #FFFFFF"><span aria-hidden="true" style="flex: 0 0 7px; width: 7px; height: 7px; border-radius: 50%; background: #FFFFFF; transform: translateY(-2px)"></span><span>Validação do novo card design</span></li>
            <li style="display: flex; align-items: baseline; gap: 12px; font-size: 20px; font-weight: 600; line-height: 1.4; color: #FFFFFF"><span aria-hidden="true" style="flex: 0 0 7px; width: 7px; height: 7px; border-radius: 50%; background: #FFFFFF; transform: translateY(-2px)"></span><span>Refazer toda a experiência de ativação de cartões</span></li>
            <li style="display: flex; align-items: baseline; gap: 12px; font-size: 20px; font-weight: 600; line-height: 1.4; color: #FFFFFF"><span aria-hidden="true" style="flex: 0 0 7px; width: 7px; height: 7px; border-radius: 50%; background: #FFFFFF; transform: translateY(-2px)"></span><span>Melhorar o bloqueio e desbloqueio do cartão físico</span></li>
            <li style="display: flex; align-items: baseline; gap: 12px; font-size: 20px; font-weight: 600; line-height: 1.4; color: #FFFFFF"><span aria-hidden="true" style="flex: 0 0 7px; width: 7px; height: 7px; border-radius: 50%; background: #FFFFFF; transform: translateY(-2px)"></span><span>Refazer a experiência de criação de cartões virtuais</span></li>
            <li style="display: flex; align-items: baseline; gap: 12px; font-size: 20px; font-weight: 600; line-height: 1.4; color: #FFFFFF"><span aria-hidden="true" style="flex: 0 0 7px; width: 7px; height: 7px; border-radius: 50%; background: #FFFFFF; transform: translateY(-2px)"></span><span>Melhorar o bloqueio e desbloqueio dos cartões virtuais</span></li>
            <li style="display: flex; align-items: baseline; gap: 12px; font-size: 20px; font-weight: 600; line-height: 1.4; color: #FFFFFF"><span aria-hidden="true" style="flex: 0 0 7px; width: 7px; height: 7px; border-radius: 50%; background: #FFFFFF; transform: translateY(-2px)"></span><span>Melhorar a alteração de senha de transação</span></li>
          </ul>
        </div>
        <div style="display: flex; flex-direction: column; gap: 22px; padding: 40px; background: #FFFFFF; border: 2px solid #EA1D2C; border-radius: 20px">
          <div style="display: flex; align-items: baseline; justify-content: space-between; gap: 12px">
            <p style="margin: 0; font-size: 13px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #EA1D2C">Should have</p>
            <span style="font-size: 14px; font-weight: 500; color: #717171">Deveria ter</span>
          </div>
          <p style="margin: -6px 0 0; font-size: 30px; font-weight: 700; line-height: 1.15; letter-spacing: -0.02em; color: #1A1A1A">Complementos da jornada</p>
          <ul style="margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 12px">
            <li style="display: flex; align-items: baseline; gap: 12px; font-size: 20px; font-weight: 600; line-height: 1.4; color: #1A1A1A"><span aria-hidden="true" style="flex: 0 0 7px; width: 7px; height: 7px; border-radius: 50%; background: #EA1D2C; transform: translateY(-2px)"></span><span>Criar experiência de rastreio do cartão no app</span></li>
            <li style="display: flex; align-items: baseline; gap: 12px; font-size: 20px; font-weight: 600; line-height: 1.4; color: #1A1A1A"><span aria-hidden="true" style="flex: 0 0 7px; width: 7px; height: 7px; border-radius: 50%; background: #EA1D2C; transform: translateY(-2px)"></span><span>Validação da nova carta berço</span></li>
            <li style="display: flex; align-items: baseline; gap: 12px; font-size: 20px; font-weight: 600; line-height: 1.4; color: #1A1A1A"><span aria-hidden="true" style="flex: 0 0 7px; width: 7px; height: 7px; border-radius: 50%; background: #EA1D2C; transform: translateY(-2px)"></span><span>Modais sobre o cartão panless e o código de ativação</span></li>
          </ul>
        </div>
      </div>
      <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px">
        <div style="display: flex; flex-direction: column; gap: 22px; padding: 28px; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 20px">
          <div style="display: flex; align-items: baseline; justify-content: space-between; gap: 12px">
            <p style="margin: 0; font-size: 13px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #A6A6A6">Could have</p>
            <span style="font-size: 14px; font-weight: 500; color: #B5B5B5">Poderia ter</span>
          </div>
          <ul style="margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 12px">
            <li style="display: flex; align-items: baseline; gap: 12px; font-size: 16px; font-weight: 500; line-height: 1.4; color: #A6A6A6"><span aria-hidden="true" style="flex: 0 0 7px; width: 7px; height: 7px; border-radius: 50%; background: #CFCFCF; transform: translateY(-2px)"></span><span>Trazer as informações do cartão para o SponsorApp</span></li>
            <li style="display: flex; align-items: baseline; gap: 12px; font-size: 16px; font-weight: 500; line-height: 1.4; color: #A6A6A6"><span aria-hidden="true" style="flex: 0 0 7px; width: 7px; height: 7px; border-radius: 50%; background: #CFCFCF; transform: translateY(-2px)"></span><span>Melhorias no Admin para identificar informações dos colaboradores</span></li>
            <li style="display: flex; align-items: baseline; gap: 12px; font-size: 16px; font-weight: 500; line-height: 1.4; color: #A6A6A6"><span aria-hidden="true" style="flex: 0 0 7px; width: 7px; height: 7px; border-radius: 50%; background: #CFCFCF; transform: translateY(-2px)"></span><span>Comunicações sobre o novo arranjo e o novo cartão</span></li>
          </ul>
        </div>
        <div style="display: flex; flex-direction: column; gap: 22px; padding: 28px; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 20px">
          <div style="display: flex; align-items: baseline; justify-content: space-between; gap: 12px">
            <p style="margin: 0; font-size: 13px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #A6A6A6">Won't have</p>
            <span style="font-size: 14px; font-weight: 500; color: #B5B5B5">Não terá agora</span>
          </div>
          <ul style="margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 12px">
            <li style="display: flex; align-items: baseline; gap: 12px; font-size: 16px; font-weight: 500; line-height: 1.4; color: #A6A6A6"><span aria-hidden="true" style="flex: 0 0 7px; width: 7px; height: 7px; border-radius: 50%; background: #CFCFCF; transform: translateY(-2px)"></span><span>Programa de engajamento para a função voucher</span></li>
            <li style="display: flex; align-items: baseline; gap: 12px; font-size: 16px; font-weight: 500; line-height: 1.4; color: #A6A6A6"><span aria-hidden="true" style="flex: 0 0 7px; width: 7px; height: 7px; border-radius: 50%; background: #CFCFCF; transform: translateY(-2px)"></span><span>Workshops com empresas sobre o novo arranjo e o cartão panless</span></li>
          </ul>
        </div>
      </div>
    </div>

  </section>
</div>
`; };
C.Definicao = Definicao;

class Sobre extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { tab: 'pro', tip: null };
  }
  renderVals() {
    const pro = this.state.tab === 'pro';
    const tabBase = 'min-height: 52px; padding: 0 28px; border: 0; cursor: pointer; font-size: 17px; letter-spacing: -0.01em; border-radius: 14px 14px 0 0;';
    const active = tabBase + ' background: #F7F7F7; color: #EA1D2C; font-weight: 700;';
    const idle = tabBase + ' background: transparent; color: #A6A6A6; font-weight: 500;';
    const panelRadius = pro ? '0 20px 20px 20px' : '20px 20px 20px 20px';
    const logoBox = 'display: inline-flex; align-items: center; justify-content: center; height: 36px; padding: 0 14px; border: 1px dashed #CFCFCF; border-radius: 8px; font-size: 12px; font-weight: 600; color: #A6A6A6; white-space: nowrap;';
    const nextBox = 'display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border: 1.5px dashed #D6D6D6; border-radius: 10px; font-size: 18px; font-weight: 600; color: #B5B5B5;';
    const journey = [
      { name: 'Algar Tech', period: '2019 – 2021', logo: '/assets/e233db9d4d897b127dca70ef610c65b2.png' },
      { name: 'Dock', period: '2021 – 2022', logo: '/assets/13ae191c642ec54a9426dcc99766bced.png' },
      { name: 'Caju', period: '2022 – 2025', logo: '/assets/eb627dab5ae1837c76d66a4f4a70940a.svg' },
      { name: 'Pier', period: '2025 – 2026', logo: '/assets/ea95a3b7b315da0215057eb27f2244ce.svg', logoH: 24 },
      { name: 'iFood', period: 'Desbloqueando', logo: '/assets/b94476d7f8d993ee49857d3b0edd2cd1.svg', locked: true, next: true },
    ].map((j) => ({
      ...j,
      hasLogo: !!j.logo && !j.locked,
      locked: !!j.locked,
      logoStyle: 'display: block; width: auto; height: ' + (j.logoH || 36) + 'px;',
      noLogo: !j.logo && !j.locked,
      placeholderStyle: j.next ? nextBox : logoBox,
      dotStyle: 'display: block; width: 10px; height: 10px; margin: 18px 0 22px; border-radius: 50%; position: relative; z-index: 1; ' + (j.next ? 'background: #FFFFFF; border: 2px solid #EA1D2C; box-sizing: border-box;' : 'background: #1A1A1A;'),
      dotClass: j.next ? 'desbloqueio-ponto' : '',
      nameStyle: 'margin: 0 0 6px; font-size: 17px; font-weight: 700; color: ' + (j.next ? '#8A8A8A' : '#1A1A1A') + ';',
      periodStyle: 'margin: 0; font-size: 15px; font-variant-numeric: tabular-nums; color: ' + (j.next ? '#EA1D2C' : '#717171') + '; font-weight: ' + (j.next ? 600 : 400) + ';',
    }));
    const tools = [
      { name: 'Claude', ai: true, logo: '/assets/1e05a277ca60ba1be42af4801cd59c40.png' },
      { name: 'Gemini', ai: true, logo: '/assets/fb8397cf12e7891db92f564c33591dde.png' },
      { name: 'Figma', ai: false, logo: '/assets/130687994b2fb0cdaa5bbd76944a171f.png' },
      { name: 'Google Analytics', ai: false, logo: '/assets/e21b5a5e8d9a9ed4048a94db3ae5c354.png' },
      { name: 'Hotjar', ai: false, logo: '/assets/e8ca050a3d5dccc7f4b2ec0f5acba01e.png' },
      { name: 'Microsoft Clarity', ai: false, logo: '/assets/b536dcf5e0b40486746d7a3dcc757582.png' },
    ].map((t, i) => ({
      ...t,
      showTip: this.state.tip === i,
      enter: () => this.setState({ tip: i }),
      leave: () => this.setState({ tip: null }),
    }));
    return {
      isPro: pro,
      isPessoal: !pro,
      proSelected: pro ? 'true' : 'false',
      pesSelected: pro ? 'false' : 'true',
      proTabStyle: pro ? active : idle,
      pesTabStyle: pro ? idle : active,
      panelStyle: 'padding: 48px; background: #F7F7F7; border-radius: ' + panelRadius + ';',
      showPro: () => this.setState({ tab: 'pro' }),
      showPessoal: () => this.setState({ tab: 'pessoal' }),
      journey,
      tools,
    };
  }
}
Sobre.defaultProps = {};
Sobre.prototype.tpl = function (v) { return html`
<div style="width: 100%; box-sizing: border-box; background: linear-gradient(to bottom, #F7F7F7 0px, #FFFFFF 440px); color: #1A1A1A; font-family: Figtree, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; -webkit-font-smoothing: antialiased; padding: 160px 40px 160px">
  <section style="width: 100%; max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column">

    <h2 style="margin: 0 0 40px; font-size: 40px; font-weight: 700; line-height: 1.1; letter-spacing: -0.03em; text-wrap: balance; color: #1A1A1A">Só deixa eu me apresentar 👋</h2>

    <div role="tablist" aria-label="Sobre mim" style="display: flex; align-items: flex-end; gap: 4px">
      <button role="tab" aria-selected=${v.proSelected} onClick=${v.showPro} style=${v.proTabStyle}>Profissional</button>
      <button role="tab" aria-selected=${v.pesSelected} onClick=${v.showPessoal} style=${v.pesTabStyle}>Pessoal</button>
    </div>

    <div role="tabpanel" style=${v.panelStyle}>

      ${(v.isPro) ? html`
        <div style="display: flex; flex-direction: column; gap: 56px">

          <p style="margin: 0; max-width: 860px; font-size: 24px; line-height: 1.5; color: #3E3E3E; text-wrap: pretty"><strong style="color: #1A1A1A">Product Designer</strong> há <strong style="color: #1A1A1A">7 anos</strong>, com foco em <strong style="color: #1A1A1A">produtos digitais centrados na pessoa usuária</strong> e forte atuação em <strong style="color: #1A1A1A">mercados regulados</strong>, sempre atuando com <strong style="color: #1A1A1A">times multidisciplinares</strong>.</p>

          <div style="display: flex; flex-direction: column; gap: 28px">
            <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #717171">Minha jornada até aqui</p>
            <div style="position: relative; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 0">
              <span aria-hidden="true" style="position: absolute; left: 10%; right: 10%; top: 79px; height: 2px; background: #DCDCDC"></span>
              ${(v.journey || []).map((j) => html`
                <div style="position: relative; display: flex; flex-direction: column; align-items: center; gap: 0; text-align: center">
                  <div style="height: 56px; display: flex; align-items: center; justify-content: center">
                    ${(j.hasLogo) ? html`
                      <img src=${j.logo} alt=${j.name} style=${j.logoStyle} />
                    ` : null}
                    ${(j.noLogo) ? html`
                      <span style=${j.placeholderStyle}>${j.placeholder}</span>
                    ` : null}
                    ${(j.locked) ? html`
                      <span style="position: relative; display: inline-flex; align-items: center; justify-content: center; height: 48px; padding: 0 16px">
                        <img src=${j.logo} alt=${j.name} style="display: block; width: auto; height: 26px; opacity: 0.3" />
                        <span aria-hidden="true" style="position: absolute; right: 2px; top: 0; display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; border-radius: 50%; background: #EA1D2C; color: #FFFFFF; box-shadow: 0 4px 10px rgba(234, 29, 44, 0.3)"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"></rect><path d="M8 11V8a4 4 0 0 1 7.5-2"></path></svg></span>
                      </span>
                    ` : null}
                  </div>
                  <span class=${j.dotClass} style=${j.dotStyle}></span>
                  <p style=${j.nameStyle}>${j.name}</p>
                  <p style=${j.periodStyle}>${j.period}${(j.locked) ? html`<span aria-hidden="true"><span class="ponto-1">.</span><span class="ponto-2">.</span><span class="ponto-3">.</span></span>` : null}</p>
                </div>
              `)}
            </div>
          </div>

          <div style="display: flex; flex-wrap: wrap; gap: 48px">
            <div style="flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 20px">
              <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #717171">Principais qualidades</p>
              <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px">
                <div style="display: flex; align-items: center; gap: 14px; padding: 18px 20px; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 12px">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EA1D2C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex: 0 0 22px"><rect x="3" y="7" width="18" height="13" rx="2"></rect><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"></path></svg>
                  <span style="font-size: 16px; line-height: 1.35">Visão de produto</span>
                </div>
                <div style="display: flex; align-items: center; gap: 14px; padding: 18px 20px; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 12px">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EA1D2C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex: 0 0 22px"><rect x="3" y="4" width="18" height="12" rx="2"></rect><path d="M8 20h8M12 16v4"></path></svg>
                  <span style="font-size: 16px; line-height: 1.35">Resolução de problemas em mercados regulados</span>
                </div>
                <div style="display: flex; align-items: center; gap: 14px; padding: 18px 20px; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 12px">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EA1D2C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex: 0 0 22px"><path d="M3 3v18h18"></path><path d="m7 15 4-4 3 3 5-6"></path></svg>
                  <span style="font-size: 16px; line-height: 1.35">Decisões baseadas em dados</span>
                </div>
                <div style="display: flex; align-items: center; gap: 14px; padding: 18px 20px; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 12px">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EA1D2C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex: 0 0 22px"><circle cx="12" cy="12" r="9"></circle><path d="M15 9.5c-.5-1-1.6-1.5-3-1.5-1.7 0-3 .8-3 2s1.3 1.7 3 2 3 .8 3 2-1.3 2-3 2c-1.4 0-2.5-.5-3-1.5M12 6v2M12 16v2"></path></svg>
                  <span style="font-size: 16px; line-height: 1.35">Foco em experiência e impacto real</span>
                </div>
              </div>
            </div>

            <div style="flex: 1 1 440px; min-width: 0; display: flex; flex-direction: column; gap: 20px">
              <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #717171">Ferramentas do dia a dia</p>
              <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px">
                ${(v.tools || []).map((t) => html`
                  <div onMouseEnter=${t.enter} onMouseLeave=${t.leave} style="position: relative; height: 72px; display: flex; align-items: center; justify-content: center; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 12px">
                    <img src=${t.logo} alt=${t.name} style="display: block; width: 40px; height: 40px; object-fit: contain" />
                    ${(t.showTip) ? html`
                      <span role="tooltip" style="position: absolute; left: 50%; bottom: calc(100% + 12px); transform: translateX(-50%); z-index: 5; padding: 7px 12px; background: #1A1A1A; color: #FFFFFF; border-radius: 8px; font-size: 13px; font-weight: 600; line-height: 1.2; white-space: nowrap; box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18); pointer-events: none">${t.name}<span aria-hidden="true" style="position: absolute; left: 50%; top: 100%; width: 10px; height: 10px; margin: -5px 0 0 -5px; background: #1A1A1A; transform: rotate(45deg)"></span></span>
                    ` : null}
                    ${(t.ai) ? html`
                      <span style="position: absolute; top: -9px; right: 10px; padding: 2px 8px; background: #EA1D2C; color: #FFFFFF; border-radius: 999px; font-size: 10px; font-weight: 700; letter-spacing: 0.04em">IA</span>
                    ` : null}
                  </div>
                `)}
              </div>
            </div>
          </div>

        </div>
      ` : null}

      ${(v.isPessoal) ? html`
        <div style="display: flex; flex-direction: column; gap: 48px">

          <div style="display: flex; flex-direction: column; gap: 12px">
            <p style="margin: 0; font-size: 20px; line-height: 1.5; color: #717171">Aqui um pouco do que me move <strong style="color: #1A1A1A">além do design</strong>.</p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); grid-template-rows: repeat(3, 220px); gap: 16px">
            <img src="/assets/d5ff308911f84ea7f585856459df2437.jpg" alt="Meu filho na cadeirinha de alimentação." style="grid-column: 1 / span 3; grid-row: 1 / span 2; display: block; width: 100%; height: 100%; min-height: 0; object-fit: cover; border-radius: 16px; background: #F2F2F2" />
            <img src="/assets/8f196f02083df0487c0d147afeeab18b.jpg" alt="Meu filho ao lado de um bichinho de pelúcia da seleção brasileira." style="grid-column: 4 / span 3; grid-row: 1 / span 2; display: block; width: 100%; height: 100%; min-height: 0; object-fit: cover; border-radius: 16px; background: #F2F2F2" />
            <div style="grid-column: 7 / span 3; grid-row: 1; display: flex; flex-direction: column; justify-content: space-between; gap: 16px; padding: 24px; box-sizing: border-box; background: #F9879C; border-radius: 16px">
              <span style="display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 50%; background: rgba(255, 255, 255, 0.45)"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"></path></svg></span>
              <p style="margin: 0; font-size: 20px; font-weight: 700; line-height: 1.25; letter-spacing: -0.01em; color: #1A1A1A; text-wrap: balance">Aproveitar minha família</p>
            </div>
            <img src="/assets/2cce8c372ff494502f5eb783a153a2b6.jpg" alt="Foto de viagem, com montanhas nevadas ao fundo." style="grid-column: 10 / span 3; grid-row: 1 / span 2; display: block; width: 100%; height: 100%; min-height: 0; object-fit: cover; border-radius: 16px; background: #F2F2F2" />
            <div style="grid-column: 7 / span 3; grid-row: 2; display: flex; flex-direction: column; justify-content: space-between; gap: 16px; padding: 24px; box-sizing: border-box; background: #B6D048; border-radius: 16px">
              <span style="display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 50%; background: rgba(255, 255, 255, 0.45)"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11 12 4l9 7"></path><path d="M5 10v10h14V10"></path><path d="M10 20v-5h4v5"></path></svg></span>
              <p style="margin: 0; font-size: 20px; font-weight: 700; line-height: 1.25; letter-spacing: -0.01em; color: #1A1A1A; text-wrap: balance">Ir para a chácara dos meus pais</p>
            </div>
            <div style="grid-column: 1 / span 3; grid-row: 3; display: flex; flex-direction: column; justify-content: space-between; gap: 16px; padding: 24px; box-sizing: border-box; background: #F6D553; border-radius: 16px">
              <span style="display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 50%; background: rgba(255, 255, 255, 0.45)"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M3.5 9.5c3 1 6 .5 8.5-2.5M20.5 14.5c-3-1-6-.5-8.5 2.5M8 3.8c2 3 2.5 7.5 1 12.5M16 20.2c-2-3-2.5-7.5-1-12.5"></path></svg></span>
              <p style="margin: 0; font-size: 20px; font-weight: 700; line-height: 1.25; letter-spacing: -0.01em; color: #1A1A1A; text-wrap: balance">Esportes: beach tennis e futebol</p>
            </div>
            <img src="/assets/17996019fe1ea7a401fb3c63a6af3be4.jpg" alt="Eu jogando beach tennis, segurando a raquete." style="grid-column: 4 / span 3; grid-row: 3; display: block; width: 100%; height: 100%; min-height: 0; object-fit: cover; border-radius: 16px; background: #F2F2F2" />
            <img src="/assets/6f50b665d73da96b8c5c3b1976fcaa2c.jpg" alt="Minhas duas cachorras deitadas na grama." style="grid-column: 7 / span 4; grid-row: 3; display: block; width: 100%; height: 100%; min-height: 0; object-fit: cover; border-radius: 16px; background: #F2F2F2" />
            <div style="grid-column: 11 / span 2; grid-row: 3; display: flex; flex-direction: column; justify-content: space-between; gap: 16px; padding: 24px; box-sizing: border-box; background: #8C60C5; border-radius: 16px">
              <span style="display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 50%; background: rgba(255, 255, 255, 0.45)"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18V5l11-2v13"></path><circle cx="6.5" cy="18" r="2.5"></circle><circle cx="17.5" cy="16" r="2.5"></circle></svg></span>
              <p style="margin: 0; font-size: 20px; font-weight: 700; line-height: 1.25; letter-spacing: -0.01em; color: #FFFFFF; text-wrap: balance">Escutar e tocar músicas</p>
            </div>
          </div>

        </div>
      ` : null}

    </div>
  </section>
</div>
`; };
C.Sobre = Sobre;

class InvestigacaoHorizontal extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { ativa: 0 };
  }
  renderVals() {
    const ativa = this.state.ativa;
    const base = 'position: relative; display: flex; flex-direction: column; ';
    const op = (i) => 'opacity: ' + (i === ativa ? 1 : 0.2) + '; transition: opacity 400ms ease;';
    const etapa = (i) => base + 'flex: 0 0 1200px; width: 1200px; padding-top: 104px; gap: 14px;';
    const marca = (i) => 'position: absolute; left: 0; top: 0; z-index: 1; display: flex; align-items: center; justify-content: center; width: 56px; height: 56px; box-sizing: border-box; background: #FFFFFF; border-radius: 50%; font-size: 18px; font-weight: 700; font-variant-numeric: tabular-nums; transition: border-color 400ms ease, color 400ms ease; ' + (i === ativa ? 'border: 2px solid #EA1D2C; color: #EA1D2C;' : 'border: 2px solid #F8C9CE; color: #F4A3AA;');
    const conteudo = (i) => 'display: flex; flex-direction: column; gap: 40px; ' + op(i);
    const aoRolar = (e) => {
      const el = (e && (e.currentTarget || e.target)) || document.querySelector('[data-trilha-inv]');
      if (!el || !el.querySelectorAll) return;
      const paradas = Array.from(el.querySelectorAll('.parada'));
      if (!paradas.length) return;
      const x0 = paradas[0].offsetLeft;
      let idx = 0;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 4) idx = paradas.length - 1;
      else {
        let melhor = Infinity;
        paradas.forEach((p, i) => { const d = Math.abs(p.offsetLeft - x0 - el.scrollLeft); if (d < melhor) { melhor = d; idx = i; } });
      }
      if (idx !== this.state.ativa) this.setState({ ativa: idx });
    };
    const rolar = (dir) => () => {
      const el = document.querySelector('[data-trilha-inv]');
      if (!el) return;
      const paradas = Array.from(el.querySelectorAll('.parada'));
      const pos = paradas.map((p) => p.offsetLeft - paradas[0].offsetLeft);
      const atual = el.scrollLeft;
      let alvo;
      if (dir > 0) alvo = pos.find((x) => x > atual + 8);
      else alvo = pos.slice().reverse().find((x) => x < atual - 8);
      if (alvo === undefined) alvo = dir > 0 ? el.scrollWidth : 0;
      el.scrollTo({ left: Math.max(0, alvo) });
    };
    return {
      anterior: rolar(-1), proxima: rolar(1), aoRolar,
      parada1: etapa(0), parada2: etapa(1), parada3: etapa(2), parada4: etapa(3),
      parada5: base + 'flex: 0 0 1200px; width: 1200px; align-items: flex-start; gap: 48px;',
      marca1: marca(0), marca2: marca(1), marca3: marca(2), marca4: marca(3),
      conteudo1: conteudo(0), conteudo2: conteudo(1), conteudo3: conteudo(2), conteudo4: conteudo(3),
      pilula: 'position: relative; z-index: 1; display: inline-flex; align-items: center; gap: 4px; height: 56px; padding-right: 24px; border-radius: 999px; font-size: 16px; font-weight: 700; color: #FFFFFF; white-space: nowrap; transition: background-color 400ms ease, box-shadow 400ms ease; ' + (ativa === 4 ? 'background: #EA1D2C; box-shadow: 0 10px 24px rgba(234, 29, 44, 0.25);' : 'background: #F8C9CE; box-shadow: none;'),
      textoFinal: 'display: flex; flex-direction: column; gap: 40px; width: 100%; ' + op(4),
    };
  }
}
InvestigacaoHorizontal.defaultProps = {};
InvestigacaoHorizontal.prototype.tpl = function (v) { return html`
<div style="width: 100%; box-sizing: border-box; background: #FFFFFF; color: #3E3E3E; font-family: Figtree, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; -webkit-font-smoothing: antialiased; padding: 120px 0; overflow: hidden">
  <section style="width: 100%; max-width: 1200px; box-sizing: content-box; padding: 0 40px; margin: 0 auto; display: flex; flex-direction: column; gap: 56px">

    <${C.TituloSecao} numero="03" etapa="Investigação" titulo="Do mapeamento à causa de cada fricção" subtitulo="Cada etapa da investigação dependeu da anterior. Este é o caminho que percorri, parada por parada." />

  </section>

  <div style="position: relative; margin-top: 72px">
    <div style="position: absolute; top: 4px; right: max(40px, calc(50vw - 600px)); z-index: 3; display: flex; gap: 8px; padding: 0 12px; margin-right: -12px; background: #FFFFFF">
        <button type="button" class="seta-inv" aria-label="Parada anterior" onClick=${v.anterior} style="display: flex; align-items: center; justify-content: center; width: 48px; height: 48px; padding: 0; border: 1px solid #E2E2E2; border-radius: 50%; background: #FFFFFF; color: #1A1A1A; cursor: pointer"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></button>
        <button type="button" class="seta-inv" aria-label="Próxima parada" onClick=${v.proxima} style="display: flex; align-items: center; justify-content: center; width: 48px; height: 48px; padding: 0; border: 1px solid #E2E2E2; border-radius: 50%; background: #FFFFFF; color: #1A1A1A; cursor: pointer"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button>
    </div>
  <div class="trilha-inv" data-trilha-inv tabindex="0" onScroll=${v.aoRolar} role="region" aria-label="Caminho da investigação, com rolagem horizontal" style="width: 100%; overflow-x: auto; overflow-y: hidden">
    <div style="position: relative; display: flex; align-items: flex-start; gap: 160px; width: max-content; box-sizing: border-box; padding: 0 var(--p) 32px">
      <span aria-hidden="true" style="position: absolute; left: calc(var(--p) + 28px); right: calc(var(--p) + 1200px - 28px); top: 27px; border-top: 2px dashed #F4A3AA"></span>

      <div class="parada" style=${v.parada1}>
        <span aria-hidden="true" style=${v.marca1}>01</span>
        <div style=${v.conteudo1}>
      <div style="display: flex; flex-direction: column; gap: 10px">
        <h3 style="margin: 0; font-size: 28px; font-weight: 700; line-height: 1.2; letter-spacing: -0.02em; color: #1A1A1A">Mapeamento da experiência atual</h3>
        <p style="margin: 0; max-width: 640px; font-size: 18px; line-height: 1.5; color: #717171">Mapeei os principais fluxos relacionados à gestão de cartões dentro do aplicativo.</p>
      </div>

      <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 48px">
        <div style="flex: 1 1 680px; min-width: 0">
          <div style="position: relative; width: 680px; height: 488px">
          <svg aria-hidden="true" width="40" height="8" viewBox="0 0 40 8" preserveAspectRatio="none" style="position: absolute; left: 236px; top: 240px; width: 40px; height: 8px; overflow: visible; fill: none; stroke: #D6D6D6; stroke-width: 2; stroke-linecap: round"><path d="M 0 4 L 40 4"></path></svg>
          <svg aria-hidden="true" width="8" height="384" viewBox="0 0 8 384" preserveAspectRatio="none" style="position: absolute; left: 272px; top: 52px; width: 8px; height: 384px; overflow: visible; fill: none; stroke: #D6D6D6; stroke-width: 2; stroke-linecap: round"><path d="M 4 0 L 4 384"></path></svg>
          <svg role="img" aria-label="De Gestão de cartões para Ativação do cartão físico" width="39" height="8" viewBox="0 0 39 8" preserveAspectRatio="none" style="position: absolute; left: 276px; top: 48px; width: 39px; height: 8px; overflow: visible; fill: none; stroke: #D6D6D6; stroke-width: 2; stroke-linecap: round"><path d="M 0 4 L 39 4"></path></svg>
          <svg role="img" aria-label="De Gestão de cartões para Criação dos cartões virtuais" width="39" height="8" viewBox="0 0 39 8" preserveAspectRatio="none" style="position: absolute; left: 276px; top: 144px; width: 39px; height: 8px; overflow: visible; fill: none; stroke: #D6D6D6; stroke-width: 2; stroke-linecap: round"><path d="M 0 4 L 39 4"></path></svg>
          <svg role="img" aria-label="De Gestão de cartões para Bloqueio/desbloqueio do cartão físico" width="39" height="8" viewBox="0 0 39 8" preserveAspectRatio="none" style="position: absolute; left: 276px; top: 240px; width: 39px; height: 8px; overflow: visible; fill: none; stroke: #D6D6D6; stroke-width: 2; stroke-linecap: round"><path d="M 0 4 L 39 4"></path></svg>
          <svg role="img" aria-label="De Gestão de cartões para Bloqueio/desbloqueio dos cartões virtuais" width="39" height="8" viewBox="0 0 39 8" preserveAspectRatio="none" style="position: absolute; left: 276px; top: 336px; width: 39px; height: 8px; overflow: visible; fill: none; stroke: #D6D6D6; stroke-width: 2; stroke-linecap: round"><path d="M 0 4 L 39 4"></path></svg>
          <svg role="img" aria-label="De Gestão de cartões para Alteração de senha de transação" width="39" height="8" viewBox="0 0 39 8" preserveAspectRatio="none" style="position: absolute; left: 276px; top: 432px; width: 39px; height: 8px; overflow: visible; fill: none; stroke: #D6D6D6; stroke-width: 2; stroke-linecap: round"><path d="M 0 4 L 39 4"></path></svg>
          <div style="position: absolute; left: 0px; top: 216px; width: 236px; height: 56px; box-sizing: border-box; padding: 0 20px; display: flex; align-items: center; justify-content: center; background: #1A1A1A; color: #FFFFFF; border-radius: 999px; font-size: 18px; font-weight: 700; box-shadow: 0 12px 28px rgba(26, 26, 26, 0.18)">Gestão de cartões</div>
          <div style="position: absolute; left: 316px; top: 24px; width: 364px; height: 56px; box-sizing: border-box; padding: 0 22px; display: flex; align-items: center; gap: 12px; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 999px; font-size: 17px; font-weight: 500; color: #1A1A1A; box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06)"><span style="font-size: 13px; font-weight: 700; color: #EA1D2C; font-variant-numeric: tabular-nums">01</span><span>Ativação do cartão físico</span></div>
          <div style="position: absolute; left: 316px; top: 120px; width: 364px; height: 56px; box-sizing: border-box; padding: 0 22px; display: flex; align-items: center; gap: 12px; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 999px; font-size: 17px; font-weight: 500; color: #1A1A1A; box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06)"><span style="font-size: 13px; font-weight: 700; color: #EA1D2C; font-variant-numeric: tabular-nums">02</span><span>Criação dos cartões virtuais</span></div>
          <div style="position: absolute; left: 316px; top: 216px; width: 364px; height: 56px; box-sizing: border-box; padding: 0 22px; display: flex; align-items: center; gap: 12px; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 999px; font-size: 17px; font-weight: 500; color: #1A1A1A; box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06)"><span style="font-size: 13px; font-weight: 700; color: #EA1D2C; font-variant-numeric: tabular-nums">03</span><span>Bloqueio/desbloqueio do cartão físico</span></div>
          <div style="position: absolute; left: 316px; top: 312px; width: 364px; height: 56px; box-sizing: border-box; padding: 0 22px; display: flex; align-items: center; gap: 12px; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 999px; font-size: 17px; font-weight: 500; color: #1A1A1A; box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06)"><span style="font-size: 13px; font-weight: 700; color: #EA1D2C; font-variant-numeric: tabular-nums">04</span><span>Bloqueio/desbloqueio dos cartões virtuais</span></div>
          <div style="position: absolute; left: 316px; top: 408px; width: 364px; height: 56px; box-sizing: border-box; padding: 0 22px; display: flex; align-items: center; gap: 12px; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 999px; font-size: 17px; font-weight: 500; color: #1A1A1A; box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06)"><span style="font-size: 13px; font-weight: 700; color: #EA1D2C; font-variant-numeric: tabular-nums">05</span><span>Alteração de senha de transação</span></div>
          </div>
        </div>

        <div style="flex: 1 1 280px; min-width: 0; display: flex; flex-direction: column; gap: 24px; padding: 32px; background: #F7F7F7; border-radius: 20px">
          <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #EA1D2C">Resultado do mapeamento</p>
          <div style="display: flex; align-items: baseline; gap: 14px">
            <span style="font-size: 112px; font-weight: 700; line-height: 0.9; letter-spacing: -0.05em; color: #EA1D2C">5</span>
            <span style="font-size: 22px; font-weight: 700; color: #1A1A1A">fluxos mapeados</span>
          </div>
          <span aria-hidden="true" style="display: block; height: 1px; background: #E2E2E2"></span>
          <p style="margin: 0; font-size: 24px; font-weight: 700; line-height: 1.3; letter-spacing: -0.015em; color: #1A1A1A; text-wrap: pretty">A mudança não afetaria uma única tela, mas um conjunto de jornadas conectadas dentro do app.</p>
        </div>
      </div>
    </div>
      </div>

      <div class="parada" style=${v.parada2}>
        <span aria-hidden="true" style=${v.marca2}>02</span>
        <div style=${v.conteudo2}>
      <div style="display: flex; flex-direction: column; gap: 10px">
        <h3 style="margin: 0; font-size: 28px; font-weight: 700; line-height: 1.2; letter-spacing: -0.02em; color: #1A1A1A">Entrevistas com CX</h3>
        <p style="margin: 0; max-width: 640px; font-size: 18px; line-height: 1.5; color: #717171">Entrevistei pontos focais do time de CX para entender quais fluxos concentravam mais dúvidas, reclamações e dificuldades.</p>
      </div>

      <div style="display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr); gap: 48px; align-items: start">
      <div style="display: flex; flex-direction: column; gap: 8px">
        <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #717171">Perguntas que nortearam as entrevistas</p>
        <ol style="margin: 0; padding: 0; list-style: none; max-width: 900px">
          <li style="display: flex; align-items: baseline; gap: 20px; padding: 20px 0">
            <span style="flex: 0 0 auto; font-size: 14px; font-weight: 700; letter-spacing: 0.06em; font-variant-numeric: tabular-nums; color: #EA1D2C">01</span>
            <span style="font-size: 20px; line-height: 1.45; color: #1A1A1A">Quais fluxos relacionados à gestão de cartões mais geram dúvidas, reclamações ou problemas entre as pessoas usuárias?</span>
          </li>
          <li style="border-top: 1px solid #EBEBEB; display: flex; align-items: baseline; gap: 20px; padding: 20px 0">
            <span style="flex: 0 0 auto; font-size: 14px; font-weight: 700; letter-spacing: 0.06em; font-variant-numeric: tabular-nums; color: #EA1D2C">02</span>
            <span style="font-size: 20px; line-height: 1.45; color: #1A1A1A">Quais são as principais queixas das pessoas usuárias?</span>
          </li>
          <li style="border-top: 1px solid #EBEBEB; display: flex; align-items: baseline; gap: 20px; padding: 20px 0">
            <span style="flex: 0 0 auto; font-size: 14px; font-weight: 700; letter-spacing: 0.06em; font-variant-numeric: tabular-nums; color: #EA1D2C">03</span>
            <span style="font-size: 20px; line-height: 1.45; color: #1A1A1A">Quais informações ou ações poderiam estar mais claras no app para reduzir essas dúvidas e contatos com o CX?</span>
          </li>
        </ol>
      </div>

      <div style="display: flex; flex-direction: column; gap: 20px">
        <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #717171">O que descobrimos</p>
        <div style="display: flex; flex-direction: column; gap: 12px">
          <div style="display: flex; flex-direction: column; gap: 10px; padding: 24px 28px; background: #F7F7F7; border-radius: 20px">
            <h4 style="margin: 0; font-size: 14px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #ea1d2c">Fluxos críticos</h4>
            <p style="margin: 0; font-size: 18px; font-weight: 700; line-height: 1.5; color: #3E3E3E; text-wrap: pretty">Ativação, bloqueio/desbloqueio e cartão virtual concentravam a maior parte dos contatos.</p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 10px; padding: 24px 28px; background: #F7F7F7; border-radius: 20px">
            <h4 style="margin: 0; font-size: 14px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #ea1d2c">Principais queixas</h4>
            <p style="margin: 0; font-size: 18px; font-weight: 700; line-height: 1.5; color: #3E3E3E; text-wrap: pretty">Dificuldades com o número do cartão, não saber se o bloqueio funcionou e não achar os cartões virtuais.</p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 10px; padding: 24px 28px; background: #F7F7F7; border-radius: 20px">
            <h4 style="margin: 0; font-size: 14px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #ea1d2c">Oportunidades no app</h4>
            <p style="margin: 0; font-size: 18px; font-weight: 700; line-height: 1.5; color: #3E3E3E; text-wrap: pretty">Orientar onde encontrar as informações do cartão e confirmar o resultado de cada ação.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
      </div>

      <div class="parada" style=${v.parada3}>
        <span aria-hidden="true" style=${v.marca3}>03</span>
        <div style=${v.conteudo3}>
      <div style="display: flex; flex-direction: column; gap: 10px">
        <h3 style="margin: 0; font-size: 28px; font-weight: 700; line-height: 1.2; letter-spacing: -0.02em; color: #1A1A1A">Dimensionando o problema com dados</h3>
        <p style="margin: 0; max-width: 640px; font-size: 18px; line-height: 1.5; color: #717171">Cruzei o volume de atendimentos com o funil de ativação para entender o tamanho de cada fricção.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px">

        <div style="display: flex; flex-direction: column; gap: 28px; padding: 40px; background: #F7F7F7; border-radius: 20px">
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px">
            <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #717171">Tickets de atendimento</p>
            <span style="display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 999px; font-size: 13px; font-weight: 600; color: #3E3E3E"><img src="/assets/67096d9bed4b70251ca2f7858f85df1e.svg" alt="" style="display: block; width: 14px; height: 14px; object-fit: contain" />Zendesk</span>
          </div>
          <div style="display: flex; align-items: flex-end; gap: 20px">
            <span style="font-size: 96px; font-weight: 700; line-height: 0.9; letter-spacing: -0.05em; font-variant-numeric: tabular-nums; color: #EA1D2C">17%</span>
            <p style="margin: 0 0 6px; max-width: 260px; font-size: 18px; font-weight: 600; line-height: 1.35; color: #1A1A1A">dos atendimentos eram sobre gestão de cartões</p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 14px">
            <div role="img" aria-label="Barra de proporção: 17% de cerca de 22 mil atendimentos eram sobre gestão de cartões" style="display: flex; height: 16px; border-radius: 999px; overflow: hidden; background: #E2E2E2">
              <span style="display: block; width: 17%; background: #EA1D2C"></span>
            </div>
            <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px 24px; font-size: 15px; color: #3E3E3E">
              <span style="display: inline-flex; align-items: center; gap: 8px"><span aria-hidden="true" style="width: 10px; height: 10px; border-radius: 50%; background: #EA1D2C"></span><strong style="color: #1A1A1A; font-variant-numeric: tabular-nums">~3.700</strong> sobre gestão de cartões</span>
              <span style="display: inline-flex; align-items: center; gap: 8px"><span aria-hidden="true" style="width: 10px; height: 10px; border-radius: 50%; background: #CFCFCF"></span><strong style="color: #1A1A1A; font-variant-numeric: tabular-nums">~22 mil</strong> no total, em 3 meses</span>
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 28px; padding: 40px; background: #F7F7F7; border-radius: 20px">
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px">
            <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #717171">Funil de ativação de cartão</p>
            <span style="display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 999px; font-size: 13px; font-weight: 600; color: #3E3E3E"><img src="/assets/e21b5a5e8d9a9ed4048a94db3ae5c354.png" alt="" style="display: block; width: 14px; height: 14px; object-fit: contain" />Google Analytics</span>
          </div>
          <div style="display: flex; align-items: flex-end; gap: 20px">
            <span style="font-size: 96px; font-weight: 700; line-height: 0.9; letter-spacing: -0.05em; font-variant-numeric: tabular-nums; color: #EA1D2C">12%</span>
            <p style="margin: 0 0 6px; max-width: 260px; font-size: 18px; font-weight: 600; line-height: 1.35; color: #1A1A1A">abandonavam o fluxo de ativação de cartão</p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 16px">
            <div style="display: flex; flex-direction: column; gap: 8px">
              <div style="display: flex; justify-content: space-between; font-size: 15px; color: #3E3E3E"><span>Iniciaram a ativação</span><strong style="color: #1A1A1A; font-variant-numeric: tabular-nums">100%</strong></div>
              <div role="img" aria-label="100% das pessoas iniciavam a ativação" style="height: 16px; border-radius: 999px; background: #1A1A1A"></div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px">
              <div style="display: flex; justify-content: space-between; font-size: 15px; color: #3E3E3E"><span>Concluíram a ativação</span><span><strong style="color: #1A1A1A; font-variant-numeric: tabular-nums">88%</strong> <span style="color: #EA1D2C; font-weight: 700">· 12% abandonavam</span></span></div>
              <div role="img" aria-label="88% concluíam a ativação e 12% abandonavam" style="display: flex; gap: 3px; height: 16px">
                <span style="display: block; width: 88%; border-radius: 999px; background: #1A1A1A"></span>
                <span style="display: block; flex: 1; border-radius: 999px; background: repeating-linear-gradient(135deg, #EA1D2C 0 4px, #FDE8EA 4px 8px)"></span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
      </div>

      <div class="parada" style=${v.parada4}>
        <span aria-hidden="true" style=${v.marca4}>04</span>
        <div style=${v.conteudo4}>
      <div style="display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 16px">
        <div style="display: flex; flex-direction: column; gap: 10px">
          <h3 style="margin: 0; font-size: 28px; font-weight: 700; line-height: 1.2; letter-spacing: -0.02em; color: #1A1A1A">Analisando o comportamento por trás dos números</h3>
          <p style="margin: 0; max-width: 640px; font-size: 18px; line-height: 1.5; color: #717171">Analisei 30 gravações de sessão de cada fluxo para identificar padrões de comportamento e pontos de fricção.</p>
        </div>
        <span style="display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 999px; font-size: 13px; font-weight: 600; color: #3E3E3E"><img src="/assets/b536dcf5e0b40486746d7a3dcc757582.png" alt="" style="display: block; width: 14px; height: 14px; object-fit: contain" />Microsoft Clarity</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 20px">
        <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #717171">Sinais observados</p>
        <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px">
          <div style="display: flex; flex-direction: column; gap: 16px; padding: 28px; background: #F7F7F7; border-radius: 20px">
            <div style="display: flex; align-items: center; justify-content: center; height: 216px; background: #FFFFFF; border-radius: 14px"><svg viewBox="0 0 260 224" width="100%" height="200" role="img" aria-label="Ilustração de hesitação: cursor parado e indo e voltando sobre o campo do número do cartão" style="display: block"><rect x="70" y="14" width="120" height="196" rx="22" fill="#FFFFFF" stroke="#1A1A1A" stroke-width="3"></rect><rect x="112" y="24" width="36" height="8" rx="4" fill="#1A1A1A"></rect>
<rect x="86" y="50" width="56" height="7" rx="3.5" fill="#E2E2E2"></rect><rect x="86" y="64" width="80" height="6" rx="3" fill="#EFEFEF"></rect>
<rect x="86" y="88" width="88" height="30" rx="8" fill="#FFFFFF" stroke="#CFCFCF" stroke-width="2"></rect><rect x="94" y="100" width="44" height="6" rx="3" fill="#E2E2E2"></rect>
<path d="M118 150 C 96 136, 150 128, 132 112 C 120 102, 156 98, 146 120" fill="none" stroke="#EA1D2C" stroke-width="2" stroke-dasharray="4 5" stroke-linecap="round"></path>
<path d="M146 120 l0 22 l6 -6 l5 10 l5 -2 l-5 -10 l8 0 z" fill="#1A1A1A"></path>
<rect x="86" y="178" width="88" height="20" rx="8" fill="#E2E2E2"></rect>
<g transform="translate(196 54)"><circle r="26" fill="#EA1D2C"></circle><circle r="13" fill="none" stroke="#FFFFFF" stroke-width="2.5"></circle><path d="M0 -6 V0 L5 3" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"></path></g>
</svg></div>
            <h4 style="margin: 8px 0 0; font-size: 22px; font-weight: 700; line-height: 1.2; letter-spacing: -0.015em; color: #1A1A1A">Hesitação</h4>
            <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #717171">Pausas longas e cursor indo e voltando antes de agir.</p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 16px; padding: 28px; background: #F7F7F7; border-radius: 20px">
            <div style="display: flex; align-items: center; justify-content: center; height: 216px; background: #FFFFFF; border-radius: 14px"><svg viewBox="0 0 260 224" width="100%" height="200" role="img" aria-label="Ilustração de repetição de ações: o mesmo botão de bloquear tocado várias vezes" style="display: block"><rect x="70" y="14" width="120" height="196" rx="22" fill="#FFFFFF" stroke="#1A1A1A" stroke-width="3"></rect><rect x="112" y="24" width="36" height="8" rx="4" fill="#1A1A1A"></rect>
<rect x="86" y="50" width="56" height="7" rx="3.5" fill="#E2E2E2"></rect><rect x="86" y="64" width="80" height="6" rx="3" fill="#EFEFEF"></rect>
<rect x="86" y="86" width="88" height="54" rx="10" fill="#F7F7F7"></rect>
<rect x="96" y="104" width="40" height="18" rx="9" fill="#CFCFCF"></rect><circle cx="106" cy="113" r="7" fill="#FFFFFF"></circle>
<circle cx="150" cy="113" r="9" fill="#EA1D2C" fill-opacity="0.18"></circle><circle cx="150" cy="113" r="18" fill="none" stroke="#EA1D2C" stroke-opacity="0.45" stroke-width="2"></circle><circle cx="150" cy="113" r="27" fill="none" stroke="#EA1D2C" stroke-opacity="0.25" stroke-width="2"></circle><circle cx="150" cy="113" r="5" fill="#EA1D2C"></circle>
<rect x="86" y="178" width="88" height="20" rx="8" fill="#E2E2E2"></rect>
<g font-family="Figtree, Arial, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF"><g transform="translate(206 70)"><circle r="15" fill="#EA1D2C"></circle><text x="0" y="4.5" text-anchor="middle">1x</text></g><g transform="translate(222 108)"><circle r="15" fill="#EA1D2C"></circle><text x="0" y="4.5" text-anchor="middle">2x</text></g><g transform="translate(206 146)"><circle r="15" fill="#EA1D2C"></circle><text x="0" y="4.5" text-anchor="middle">3x</text></g></g>
</svg></div>
            <h4 style="margin: 8px 0 0; font-size: 22px; font-weight: 700; line-height: 1.2; letter-spacing: -0.015em; color: #1A1A1A">Repetição de ações</h4>
            <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #717171">O mesmo toque feito várias vezes, por falta de resposta.</p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 16px; padding: 28px; background: #F7F7F7; border-radius: 20px">
            <div style="display: flex; align-items: center; justify-content: center; height: 216px; background: #FFFFFF; border-radius: 14px"><svg viewBox="0 0 260 224" width="100%" height="200" role="img" aria-label="Ilustração de abandono: fluxo interrompido na metade, com a pessoa saindo do app" style="display: block"><rect x="70" y="14" width="120" height="196" rx="22" fill="#FFFFFF" stroke="#1A1A1A" stroke-width="3"></rect><rect x="112" y="24" width="36" height="8" rx="4" fill="#1A1A1A"></rect>
<g><circle cx="94" cy="54" r="6" fill="#1A1A1A"></circle><rect x="100" y="52" width="12" height="4" fill="#1A1A1A"></rect><circle cx="118" cy="54" r="6" fill="#1A1A1A"></circle><rect x="124" y="52" width="12" height="4" fill="#E2E2E2"></rect><circle cx="142" cy="54" r="6" fill="#FFFFFF" stroke="#CFCFCF" stroke-width="2"></circle><rect x="148" y="52" width="12" height="4" fill="#E2E2E2"></rect><circle cx="166" cy="54" r="6" fill="#FFFFFF" stroke="#CFCFCF" stroke-width="2"></circle></g>
<rect x="86" y="78" width="70" height="7" rx="3.5" fill="#E2E2E2"></rect><rect x="86" y="94" width="88" height="30" rx="8" fill="#FFFFFF" stroke="#CFCFCF" stroke-width="2"></rect>
<rect x="86" y="178" width="88" height="20" rx="8" fill="#E2E2E2"></rect>
<path d="M150 140 C 180 140, 196 128, 222 112" fill="none" stroke="#EA1D2C" stroke-width="2.5" stroke-dasharray="5 5" stroke-linecap="round"></path>
<g transform="translate(226 100)"><circle r="22" fill="#EA1D2C"></circle><path d="M-7 -7 L7 7 M7 -7 L-7 7" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"></path></g>
</svg></div>
            <h4 style="margin: 8px 0 0; font-size: 22px; font-weight: 700; line-height: 1.2; letter-spacing: -0.015em; color: #1A1A1A">Abandono</h4>
            <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #717171">O fluxo interrompido antes de chegar ao fim.</p>
          </div>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 12px">
        <div style="display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr) minmax(0, 1.6fr); gap: 24px; align-items: center; padding: 0 20px">
          <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #717171">Fluxo</p>
          <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #717171">Principal sinal</p>
          <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #717171">Causa provável</p>
        </div>
        <div style="display: flex; flex-direction: column">
          <div style="display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr) minmax(0, 1.6fr); gap: 24px; align-items: center; padding: 14px 20px; background: #FDE8EA; border-radius: 12px;">
            <span style="font-size: 16px; font-weight: 700; color: #1A1A1A">Ativação do cartão</span>
            <span style="display: flex; align-items: baseline; gap: 10px"><strong style="font-size: 26px; font-weight: 700; letter-spacing: -0.03em; font-variant-numeric: tabular-nums; color: #EA1D2C">26,7%</strong><span style="font-size: 13px; color: #717171">abandono</span></span>
            <span style="font-size: 16px; line-height: 1.45; color: #1A1A1A">Dificuldade para encontrar o número do cartão</span>
          </div>
          <div style="display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr) minmax(0, 1.6fr); gap: 24px; align-items: center; padding: 14px 20px; border-top: 1px solid #EBEBEB;">
            <span style="font-size: 16px; font-weight: 700; color: #1A1A1A">Bloqueio e desbloqueio</span>
            <span style="display: flex; align-items: baseline; gap: 10px"><strong style="font-size: 26px; font-weight: 700; letter-spacing: -0.03em; font-variant-numeric: tabular-nums; color: #EA1D2C">20,0%</strong><span style="font-size: 13px; color: #717171">repetição de ações</span></span>
            <span style="font-size: 16px; line-height: 1.45; color: #1A1A1A">Falta de feedback após a ação</span>
          </div>
          <div style="display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr) minmax(0, 1.6fr); gap: 24px; align-items: center; padding: 14px 20px; border-top: 1px solid #EBEBEB;">
            <span style="font-size: 16px; font-weight: 700; color: #1A1A1A">Alteração de senha</span>
            <span style="display: flex; align-items: baseline; gap: 10px"><strong style="font-size: 26px; font-weight: 700; letter-spacing: -0.03em; font-variant-numeric: tabular-nums; color: #EA1D2C">36,7%</strong><span style="font-size: 13px; color: #717171">hesitação</span></span>
            <span style="font-size: 16px; line-height: 1.45; color: #1A1A1A">Dificuldade com o número do cartão e a senha do app</span>
          </div>
          <div style="display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr) minmax(0, 1.6fr); gap: 24px; align-items: center; padding: 14px 20px; border-top: 1px solid #EBEBEB;">
            <span style="font-size: 16px; font-weight: 700; color: #1A1A1A">Criação de cartão virtual</span>
            <span style="display: flex; align-items: baseline; gap: 10px"><strong style="font-size: 26px; font-weight: 700; letter-spacing: -0.03em; font-variant-numeric: tabular-nums; color: #EA1D2C">23,4%</strong><span style="font-size: 13px; color: #717171">hesitação</span></span>
            <span style="font-size: 16px; line-height: 1.45; color: #1A1A1A">Dificuldade para encontrar a área de cartões virtuais</span>
          </div>
        </div>
      </div>
    </div>
      </div>

      <div class="parada" style=${v.parada5}>
        <span style=${v.pilula}><span aria-hidden="true" style="display: flex; align-items: center; justify-content: center; width: 56px; height: 56px"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V4M5 4h11l-2 4 2 4H5"></path></svg></span>Parada final</span>
        <div style=${v.textoFinal}>
      <div style="display: flex; flex-direction: column; gap: 10px">
        <h3 style="margin: 0; font-size: 28px; font-weight: 700; line-height: 1.2; letter-spacing: -0.02em; color: #1A1A1A">Expectativas e indicadores do projeto</h3>
        <p style="margin: 0; max-width: 720px; font-size: 18px; line-height: 1.5; color: #717171">O que o projeto precisava entregar e como saberíamos que deu certo.</p>
      </div>
      <div style="display: flex; flex-direction: column; gap: 20px">
        <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #717171">Expectativas</p>
        <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px">
          <div style="display: flex; flex-direction: column; gap: 28px; padding: 36px 32px; box-sizing: border-box; background: #1A1A1A; border-radius: 24px">
            <h4 style="margin: 0; font-size: 34px; font-weight: 700; line-height: 1.15; letter-spacing: -0.025em; color: #FFFFFF">Adaptar sem criar barreiras</h4>
            <p style="margin: 0; font-size: 18px; line-height: 1.55; color: rgba(255, 255, 255, 0.92)">Cartão <mark style="padding: 1px 4px; border-radius: 4px; background: #EA1D2C; color: #FFFFFF">panless</mark> no app, sem novos obstáculos.</p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 28px; padding: 36px 32px; box-sizing: border-box; background: #EA1D2C; border-radius: 24px">
            <h4 style="margin: 0; font-size: 34px; font-weight: 700; line-height: 1.15; letter-spacing: -0.025em; color: #FFFFFF">Autonomia na gestão</h4>
            <p style="margin: 0; font-size: 18px; line-height: 1.55; color: rgba(255, 255, 255, 0.92)">Gestão do cartão resolvida no app, <mark style="padding: 1px 4px; border-radius: 4px; background: #A8101C; color: #FFFFFF">sem atendimento</mark>.</p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 28px; padding: 36px 32px; box-sizing: border-box; background: #7A0F18; border-radius: 24px">
            <h4 style="margin: 0; font-size: 34px; font-weight: 700; line-height: 1.15; letter-spacing: -0.025em; color: #FFFFFF">Clareza em cada etapa</h4>
            <p style="margin: 0; font-size: 18px; line-height: 1.55; color: rgba(255, 255, 255, 0.92)"><mark style="padding: 1px 4px; border-radius: 4px; background: #EA1D2C; color: #FFFFFF">Feedback imediato</mark> a cada ação.</p>
          </div>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 20px">
        <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #717171">Indicadores de sucesso</p>
        <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px">
          <div style="display: flex; flex-direction: column; gap: 20px; padding: 36px 32px; background: #F7F7F7; border-radius: 24px">
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px">
              <span style="font-size: 56px; font-weight: 700; line-height: 1; letter-spacing: -0.04em; font-variant-numeric: tabular-nums; color: #1A1A1A">01</span>
              <span style="display: inline-flex; align-items: center; padding: 8px 14px; border-radius: 999px; font-size: 14px; font-weight: 700; white-space: nowrap; background: #EA1D2C; color: #FFFFFF">Expectativa realista</span>
            </div>
            <h4 style="margin: 8px 0 0; font-size: 24px; font-weight: 700; line-height: 1.2; letter-spacing: -0.015em; color: #1A1A1A">Contatos no atendimento</h4>
            <p style="margin: 0; font-size: 18px; line-height: 1.55; color: #717171">Muitas fricções que podíamos resolver.</p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 20px; padding: 36px 32px; background: #F7F7F7; border-radius: 24px">
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px">
              <span style="font-size: 56px; font-weight: 700; line-height: 1; letter-spacing: -0.04em; font-variant-numeric: tabular-nums; color: #1A1A1A">02</span>
              <span style="display: inline-flex; align-items: center; padding: 8px 14px; border-radius: 999px; font-size: 14px; font-weight: 700; white-space: nowrap; background: #FFFFFF; color: #EA1D2C; box-shadow: inset 0 0 0 2px #EA1D2C">Expectativa conservadora</span>
            </div>
            <h4 style="margin: 8px 0 0; font-size: 24px; font-weight: 700; line-height: 1.2; letter-spacing: -0.015em; color: #1A1A1A">Abandono nos fluxos</h4>
            <p style="margin: 0; font-size: 18px; line-height: 1.55; color: #717171">Uma etapa a mais na escolha do cartão.</p>
          </div>
        </div>
      </div>
        </div>
      </div>

    </div>
  </div>
</div>
</div>
`; };
C.InvestigacaoHorizontal = InvestigacaoHorizontal;

class PrototipoBloqueio extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { tela: 'cartao' };
    this.timer = null;
  }
  renderVals() {
    const s = this.state;
    const B = (id) => '/assets/' + id + '.jpg';
    const lista = [
      ['cartao', '7c40159632ec6e664ab07bd2df026fc0', 'Cartão físico ativo, com as ações Bloquear, Senha, Aproximação e Segunda via.'],
      ['modal', '43ef021bc42ec750a458dbfede6c38d8', 'Bottom sheet Bloquear cartão, pedindo confirmação.'],
      ['bloqueadoToast', '4055973200fb482667056097a24822c9', 'Cartão com blur e cadeado, e o aviso Cartão bloqueado com sucesso.'],
      ['bloqueado', '13e2870c71f3b9749741fe6643204217', 'Cartão bloqueado, com os botões Desbloquear e Solicitar segunda via.'],
      ['sheet', 'd50302f3ba34bdd626852dc727202e8e', 'Bottom sheet pedindo os 6 últimos dígitos do código de ativação.'],
      ['sheetOk', '8ec912e72522244826299402c88a115f', 'Os 6 dígitos preenchidos e o botão Confirmar ativo.'],
      ['desbloqueado', 'b64a0f1479a7dff7812bd85522b27d43', 'Cartão de volta ao normal, com o aviso Cartão desbloqueado com sucesso.'],
    ];
    const telas = lista.map(([k, id, alt]) => ({
      src: B(id), alt, oculta: k === s.tela ? 'false' : 'true',
      style: 'opacity: ' + (k === s.tela ? 1 : 0) + ';',
    }));
    const go = (tela, depois) => () => {
      clearTimeout(this.timer);
      this.setState({ tela });
      if (depois) this.timer = setTimeout(() => { if (this.state.tela === tela) this.setState({ tela: depois }); }, 2600);
    };
    const hs = (label, x, y, w, h, fn) => ({ label, go: fn, style: 'left: ' + x + 'px; top: ' + y + 'px; width: ' + w + 'px; height: ' + h + 'px;' });
    const bloquear = hs('Bloquear', 34, 484, 80, 100, go('modal'));
    const desbloquear = hs('Desbloquear', 24, 452, 327, 50, go('sheet'));
    const fechar = hs('Fechar', 24, 278, 44, 44, go('bloqueado'));
    const map = {
      cartao: [bloquear],
      modal: [hs('Bloquear', 24, 664, 327, 50, go('bloqueadoToast', 'bloqueado')), hs('Cancelar', 100, 724, 175, 44, go('cartao'))],
      bloqueadoToast: [desbloquear],
      bloqueado: [desbloquear],
      sheet: [fechar, hs('Digitar os 6 dígitos', 24, 542, 327, 50, go('sheetOk'))],
      sheetOk: [fechar, hs('Confirmar', 24, 666, 327, 50, go('desbloqueado', 'cartao'))],
      desbloqueado: [hs('Voltar ao cartão', 97, 104, 181, 256, go('cartao'))],
    };
    return { telas, hotspots: map[s.tela] };
  }
}
PrototipoBloqueio.defaultProps = {};
PrototipoBloqueio.prototype.tpl = function (v) { return html`
<div style="position: relative; width: 375px; height: 812px; overflow: hidden; background: #FFFFFF; border-radius: 44px">
  ${(v.telas || []).map((t) => html`
    <img class="tela" src=${t.src} alt=${t.alt} aria-hidden=${t.oculta} style=${t.style} />
  `)}
  ${(v.hotspots || []).map((h) => html`
    <button type="button" class="hs" aria-label=${h.label} onClick=${h.go} style=${h.style}></button>
  `)}
</div>
`; };
C.PrototipoBloqueio = PrototipoBloqueio;

class PrototipoVirtual extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { tela: 'fisico' };
    this.timer = null;
  }
  renderVals() {
    const s = this.state;
    const B = (id) => '/assets/' + id + '.jpg';
    const lista = [
      ['fisico', '097012a805641e6d01ae0077800f4aa7', 'Aba Cartão físico selecionada, com o cartão físico e as categorias.'],
      ['vazio', 'aedf79617be8ba9e4a6d9fd25be8df2e', 'Aba Cartões virtuais sem nenhum cartão, com ilustração e o botão Criar novo cartão virtual.'],
      ['criado', '0ac4f6cc3ae3d905f50959388191fb9d', 'Cartão virtual Voucher criado, com o aviso Cartão virtual criado com sucesso.'],
      ['voucher', '0fcb8ea48de2e7804e685345810ac91f', 'Cartão virtual Voucher, com nome, número, CVV, validade e as categorias de voucher.'],
      ['credito', '202990880074dce5a9db699e4b8dc38c', 'Cartão virtual Crédito, com nome, número, CVV, validade e as categorias de crédito.'],
      ['modal', '607bf8f55befb0f2e5d3c37463f8c127', 'Bottom sheet Bloquear cartão virtual.'],
      ['bloqueadoToast', 'cf81522431e00b738b8417ce4895b8d1', 'Cartão virtual com blur e o aviso Cartão bloqueado com sucesso.'],
      ['bloqueado', '861fe26505c93aca2adec68f1b8984ad', 'Cartão virtual bloqueado, com o botão Desbloquear.'],
      ['desbloqueado', '0dc8543ca1a2b1f6d8c74a5b83037535', 'Cartão virtual de volta ao normal, com o aviso Cartão desbloqueado com sucesso.'],
    ];
    const telas = lista.map(([k, id, alt]) => ({
      src: B(id), alt, oculta: k === s.tela ? 'false' : 'true',
      style: 'opacity: ' + (k === s.tela ? 1 : 0) + ';',
    }));
    const go = (tela, depois) => () => {
      clearTimeout(this.timer);
      this.setState({ tela });
      if (depois) this.timer = setTimeout(() => { if (this.state.tela === tela) this.setState({ tela: depois }); }, 2600);
    };
    const hs = (label, x, y, w, h, fn) => ({ label, go: fn, style: 'left: ' + x + 'px; top: ' + y + 'px; width: ' + w + 'px; height: ' + h + 'px;' });
    const abaFisico = hs('Cartão físico', 24, 36, 160, 44, go('fisico'));
    const abaVirtual = (fn) => hs('Cartões virtuais', 192, 36, 160, 44, fn);
    const verCredito = hs('Ver cartão de crédito', 300, 104, 75, 256, go('credito'));
    const verVoucher = hs('Ver cartão voucher', 0, 104, 75, 256, go('voucher'));
    const bloquear = hs('Bloquear', 30, 720, 86, 28, go('modal'));
    const map = {
      fisico: [abaVirtual(go('vazio'))],
      vazio: [abaFisico, hs('Criar novo cartão virtual', 24, 476, 327, 50, go('criado', 'voucher'))],
      criado: [abaFisico, verCredito, bloquear],
      voucher: [abaFisico, verCredito, bloquear],
      credito: [abaFisico, verVoucher],
      modal: [hs('Bloquear', 24, 664, 327, 50, go('bloqueadoToast', 'bloqueado')), hs('Cancelar', 100, 724, 175, 44, go('voucher'))],
      bloqueadoToast: [abaFisico, hs('Desbloquear', 24, 452, 327, 50, go('desbloqueado', 'voucher')), verCredito],
      bloqueado: [abaFisico, hs('Desbloquear', 24, 452, 327, 50, go('desbloqueado', 'voucher')), verCredito],
      desbloqueado: [abaFisico, verCredito, bloquear],
    };
    return { telas, hotspots: map[s.tela] };
  }
}
PrototipoVirtual.defaultProps = {};
PrototipoVirtual.prototype.tpl = function (v) { return html`
<div style="position: relative; width: 375px; height: 812px; overflow: hidden; background: #FFFFFF; border-radius: 44px">
  ${(v.telas || []).map((t) => html`
    <img class="tela" src=${t.src} alt=${t.alt} aria-hidden=${t.oculta} style=${t.style} />
  `)}
  ${(v.hotspots || []).map((h) => html`
    <button type="button" class="hs" aria-label=${h.label} onClick=${h.go} style=${h.style}></button>
  `)}
</div>
`; };
C.PrototipoVirtual = PrototipoVirtual;

class PrototipoSenha extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { tela: 'acoes', origem: 'vazio' };
  }
  renderVals() {
    const s = this.state;
    const B = (id) => '/assets/' + id + '.jpg';
    const lista = [
      ['acoes', 'dbc5bd9a5f198da629dee3c089a1a55e', 'Cartão físico com as ações Bloquear, Senha, Aproximação e Segunda via.'],
      ['vazio', '61b5f9701b20a775b07fcb5f259ee0ca', 'Alterar senha: campos Senha do aplicativo, Seis últimos dígitos do código de ativação e Nova senha do cartão físico, vazios.'],
      ['senhaApp', '3dd86d9a7a05078369fc6e2cacb80a31', 'Senha do aplicativo preenchida.'],
      ['modal', '87011c4458c3bf64734f9bdd129221b9', 'Modal Código de ativação, mostrando onde fica o código no verso do cartão.'],
      ['codigo', '93cf85c039f344b5ecc404d129d70b33', 'Seis últimos dígitos do código de ativação preenchidos.'],
      ['novaSenha', '01548fa5e8586c2b927ca23bd7010ad8', 'Nova senha do cartão preenchida e botão Confirmar ativo.'],
      ['sucesso', '04032f4b2ded861adccbe70603e46700', 'Cartão físico com o aviso Senha alterada com sucesso.'],
    ];
    const telas = lista.map(([k, id, alt]) => ({
      src: B(id), alt, oculta: k === s.tela ? 'false' : 'true',
      style: 'opacity: ' + (k === s.tela ? 1 : 0) + ';',
    }));
    const go = (tela) => () => this.setState({ tela });
    const hs = (label, x, y, w, h, fn) => ({ label, go: fn, style: 'left: ' + x + 'px; top: ' + y + 'px; width: ' + w + 'px; height: ' + h + 'px;' });
    const voltar = (fn) => hs('Voltar', 22, 46, 48, 48, fn);
    const info = hs('Onde achar o código de ativação', 302, 226, 48, 48, () => this.setState({ tela: 'modal', origem: s.tela }));
    const map = {
      acoes: [hs('Senha', 148, 488, 80, 100, go('vazio'))],
      vazio: [voltar(go('acoes')), hs('Senha do aplicativo', 24, 128, 270, 64, go('senhaApp')), info],
      senhaApp: [voltar(go('acoes')), hs('Seis últimos dígitos do código de ativação', 24, 236, 270, 62, go('codigo')), info],
      modal: [hs('Entendi', 44, 619, 287, 50, go(s.origem))],
      codigo: [voltar(go('acoes')), hs('Nova senha do cartão físico', 24, 383, 197, 50, go('novaSenha')), info],
      novaSenha: [voltar(go('acoes')), hs('Confirmar', 24, 714, 327, 50, go('sucesso')), info],
      sucesso: [hs('Voltar ao início', 97, 104, 181, 256, go('acoes'))],
    };
    return { telas, hotspots: map[s.tela] };
  }
}
PrototipoSenha.defaultProps = {};
PrototipoSenha.prototype.tpl = function (v) { return html`
<div style="position: relative; width: 375px; height: 812px; overflow: hidden; background: #FFFFFF; border-radius: 44px">
  ${(v.telas || []).map((t) => html`
    <img class="tela" src=${t.src} alt=${t.alt} aria-hidden=${t.oculta} style=${t.style} />
  `)}
  ${(v.hotspots || []).map((h) => html`
    <button type="button" class="hs" aria-label=${h.label} onClick=${h.go} style=${h.style}></button>
  `)}
</div>
`; };
C.PrototipoSenha = PrototipoSenha;

class PrototipoAtivacao extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { tela: 'home', modelo: 'h', lado: 'frente', preenchido: false };
  }
  renderVals() {
    const s = this.state;
    const B = (id) => '/assets/' + id + '.jpg';
    const lista = [
      ['home', '483d579ae2a3a7039f1266076ff70a96', 'Home do app com o alerta: seu cartão chegará em breve.'],
      ['cartoes', 'ab156afb00f59a1072331206f2c38d9c', 'Aba Cartões com o status da entrega do novo cartão.'],
      ['h-frente', '007b82c37d4e0b995f3348370d416449', 'Qual cartão você recebeu? Modelo horizontal, frente.'],
      ['v-frente', 'd3b847086ddb6150fa80026bdad066fa', 'Qual cartão você recebeu? Modelo vertical, frente.'],
      ['h-verso', 'b00840905401bc7d320c303b867bdedf', 'Qual cartão você recebeu? Modelo horizontal, verso.'],
      ['v-verso', 'a15affe5d407cffe8a8a42bd48266041', 'Qual cartão você recebeu? Modelo vertical, verso.'],
      ['modal', '7259ab45deabcb0a5d5b03f57435bf2a', 'Modal mostrando onde fica o código de ativação.'],
      ['codigo', 'f7478858c5fcb4883a804ffed34d8896', 'Ativar novo cartão: campo do código de ativação vazio.'],
      ['codigoOk', '7205b4fbcb421abd139a6f8c96e07b95', 'Ativar novo cartão: código de ativação preenchido.'],
      ['senha', 'e967acef98daa496368deeded96dc20f', 'Crie uma senha de 4 dígitos.'],
      ['senhaOk', '9b251777e129eef5a268844248e7ccdd', 'Senha de 4 dígitos preenchida.'],
      ['confirmar', '75f7ca1176d476655192945c340d52e5', 'Confirme sua senha de 4 dígitos.'],
      ['confirmarOk', '5fab0f7c977d8bfea7b6091301499af9', 'Confirmação da senha preenchida.'],
      ['sucesso', 'f70ca23791052417f4014b1021c55981', 'Cartão físico ativado!'],
      ['ativado', '43ce984a9c18779b115189358b2ca037', 'Cartão físico ativado, com código, validade e categorias.'],
    ];
    let atual = s.tela;
    if (atual === 'escolha') atual = s.modelo + '-' + s.lado;
    if (atual === 'codigo' && s.preenchido) atual = 'codigoOk';
    const telas = lista.map(([k, id, alt]) => ({
      src: B(id), alt, oculta: k === atual ? 'false' : 'true',
      style: 'opacity: ' + (k === atual ? 1 : 0) + ';',
    }));
    const go = (tela, extra) => () => this.setState(Object.assign({ tela }, extra || {}));
    const hs = (label, x, y, w, h, fn) => ({ label, go: fn, style: 'left: ' + x + 'px; top: ' + y + 'px; width: ' + w + 'px; height: ' + h + 'px;' });
    const voltar = (fn) => hs('Voltar', 20, 44, 52, 52, fn);
    const menuBeneficios = hs('Benefícios', 0, 748, 75, 64, go('home'));
    const outroModelo = () => this.setState({ modelo: s.modelo === 'h' ? 'v' : 'h' });
    const map = {
      home: [hs('Acompanhe o status do cartão', 24, 126, 327, 72, go('cartoes')), hs('Cartões', 300, 748, 75, 64, go('cartoes'))],
      cartoes: [hs('Recebi meu cartão', 24, 390, 327, 52, go('escolha')), menuBeneficios],
      escolha: [
        voltar(go('cartoes')),
        hs('Frente do cartão', 72, 232, 114, 30, () => this.setState({ lado: 'frente' })),
        hs('Verso do cartão', 192, 232, 112, 30, () => this.setState({ lado: 'verso' })),
        s.modelo === 'h' ? hs('Ver o modelo vertical', 330, 280, 45, 360, outroModelo) : hs('Ver o modelo horizontal', 0, 280, 48, 360, outroModelo),
        hs('Trocar modelo', 130, 648, 115, 46, outroModelo),
        hs('Recebi esse', 24, 720, 327, 54, go('modal', { preenchido: false })),
      ],
      modal: [hs('Entendi', 44, 617, 287, 54, go('codigo'))],
      codigo: [
        voltar(go('escolha')),
        hs('Campo do código de ativação', 24, 266, 327, 58, () => this.setState({ preenchido: true })),
        hs('Não encontrei o código', 79, 728, 217, 46, go('modal')),
      ].concat(s.preenchido ? [hs('Ativar novo cartão', 24, 662, 327, 54, go('senha'))] : []),
      senha: [voltar(go('codigo')), hs('Digitar senha', 24, 270, 327, 66, go('senhaOk'))],
      senhaOk: [voltar(go('senha')), hs('Confirmar', 24, 390, 327, 54, go('confirmar'))],
      confirmar: [voltar(go('senhaOk')), hs('Digitar senha novamente', 24, 270, 327, 66, go('confirmarOk'))],
      confirmarOk: [voltar(go('confirmar')), hs('Confirmar', 24, 390, 327, 54, go('sucesso'))],
      sucesso: [hs('Entendi', 44, 483, 287, 54, go('ativado'))],
      ativado: [menuBeneficios],
    };
    return { telas, hotspots: map[s.tela] };
  }
}
PrototipoAtivacao.defaultProps = {};
PrototipoAtivacao.prototype.tpl = function (v) { return html`
<div style="position: relative; width: 375px; height: 812px; overflow: hidden; background: #FFFFFF; border-radius: 44px">
  ${(v.telas || []).map((t) => html`
    <img class="tela" src=${t.src} alt=${t.alt} aria-hidden=${t.oculta} style=${t.style} />
  `)}
  ${(v.hotspots || []).map((h) => html`
    <button type="button" class="hs" aria-label=${h.label} onClick=${h.go} style=${h.style}></button>
  `)}
</div>
`; };
C.PrototipoAtivacao = PrototipoAtivacao;

class Ideacao extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { modelo: 'horizontal', lado: 'frente', proto: false, fluxo: 0, virt: 'voucher' };
  }
  renderVals() {
    const cards = {
      horizontal: { frente: '/assets/323685bc62be7e743753f7f0d6bb369a.png', verso: '/assets/dd2003ab4b7293f19d7a2b176a232aa2.png' },
      vertical: { frente: '/assets/db07ba4fc7f9b06d790484bdac1fe2a2.png', verso: '/assets/75db2005046ba10ed31407b962745339.png' },
    };
    const { modelo, lado } = this.state;
    const chip = (on) => 'padding: 6px 12px; border: 0; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600; ' + (on ? 'background: #E3EBFD; color: #1E3A8A;' : 'background: #ECECEC; color: #3E3E3E;');
    const dot = (on) => 'display: block; height: 8px; border-radius: 999px; ' + (on ? 'width: 24px; background: #3767E1;' : 'width: 8px; background: #D6D6D6;');
    const h = modelo === 'horizontal';
    const fluxo = this.state.fluxo;
    const virt = this.state.virt;
    const fluxos = ['Ativação do cartão físico', 'Bloqueio e desbloqueio', 'Senha do cartão', 'Cartão virtual'];
    const GAP = 48;
    const irPara = (i) => () => this.setState({ fluxo: Math.max(0, Math.min(fluxos.length - 1, i)) });
    const slide = (i, extra) => 'flex: 0 0 100%; min-width: 0; display: flex; flex-direction: column; gap: 32px; transition: opacity 500ms ease, visibility 0s linear ' + (i === fluxo ? '0s' : '500ms') + '; opacity: ' + (i === fluxo ? 1 : 0.25) + '; visibility: ' + (i === fluxo ? 'visible' : 'hidden') + ';' + (extra || '');
    const seta = (off) => 'display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; padding: 0; border: 1px solid #E2E2E2; border-radius: 50%; background: #FFFFFF; color: ' + (off ? '#C8C8C8' : '#1A1A1A') + '; cursor: ' + (off ? 'default' : 'pointer') + ';';
    return {
      abas: fluxos.map((t, i) => ({
        titulo: t,
        num: '0' + (i + 1),
        atual: i === fluxo ? 'step' : 'false',
        ir: irPara(i),
        style: 'display: inline-flex; align-items: center; gap: 8px; flex: 0 0 auto; min-height: 44px; padding: 0 20px 12px; border: 0; border-bottom: 2px solid ' + (i === fluxo ? '#EA1D2C' : '#E2E2E2') + '; background: transparent; cursor: pointer; font-size: 15px; font-weight: ' + (i === fluxo ? 700 : 500) + '; color: ' + (i === fluxo ? '#1A1A1A' : '#8A8A8A') + '; transition: color 200ms ease, border-color 200ms ease;',
        numStyle: 'font-size: 12px; font-weight: 700; font-variant-numeric: tabular-nums; color: ' + (i === fluxo ? '#EA1D2C' : '#B4B4B4') + ';',
      })),
      semAnterior: fluxo === 0 ? 'true' : 'false',
      semProximo: fluxo === fluxos.length - 1 ? 'true' : 'false',
      anterior: irPara(fluxo - 1),
      proximo: irPara(fluxo + 1),
      setaAnt: seta(fluxo === 0),
      setaProx: seta(fluxo === fluxos.length - 1),
      trilha: 'display: flex; gap: ' + GAP + 'px; transform: translateX(calc(' + (-fluxo) + ' * (100% + ' + GAP + 'px))); transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1);',
      slide1: slide(0),
      oculto1: fluxo === 0 ? 'false' : 'true',
      slide2: slide(1),
      oculto2: fluxo === 1 ? 'false' : 'true',
      slide3: slide(2),
      oculto3: fluxo === 2 ? 'false' : 'true',
      slide4: slide(3),
      oculto4: fluxo === 3 ? 'false' : 'true',
      voucherPressed: virt === 'voucher' ? 'true' : 'false',
      creditoPressed: virt === 'credito' ? 'true' : 'false',
      chipVoucher: chip(virt === 'voucher'),
      chipCredito: chip(virt === 'credito'),
      showVoucher: () => this.setState({ virt: 'voucher' }),
      showCredito: () => this.setState({ virt: 'credito' }),
      toggleVirtual: () => this.setState({ virt: virt === 'voucher' ? 'credito' : 'voucher' }),
      virtCard: virt === 'voucher' ? '/assets/2a3e9e48851382d6ed9789a91a5d469d.png' : '/assets/1e92adaa4902dca1affc25a7abde97b2.png',
      virtAlt: virt === 'voucher' ? 'Cartão virtual Voucher, laranja.' : 'Cartão virtual Crédito, vermelho.',
      virtCat: virt === 'voucher' ? '/assets/14d93f484f4a53c23b8280a7fe9f3d5c.png' : '/assets/08c6e2cb3f528b41e1dddeede78e42c3.png',
      virtCatAlt: virt === 'voucher' ? 'Categorias do voucher: Auxílio alimentação e Cultura.' : 'Categorias do crédito: Home Office, Mobilidade, Saúde, Educação, Saldo Livre, Premiações, Despesas e Auxílio alimentação.',
      virtCatStyle: 'display: block; width: 100%; height: auto; aspect-ratio: 981 / ' + (virt === 'voucher' ? 295 : 460) + ';',
      cardSrc: cards[modelo][lado],
      cardAlt: 'Cartão Caju modelo ' + (h ? 'horizontal' : 'vertical') + ', ' + lado + '.',
      modeloLabel: h ? 'Horizontal' : 'Vertical',
      chipFrente: chip(lado === 'frente'),
      chipVerso: chip(lado === 'verso'),
      frentePressed: lado === 'frente' ? 'true' : 'false',
      versoPressed: lado === 'verso' ? 'true' : 'false',
      dot1: dot(h),
      dot2: dot(!h),
      showFrente: () => this.setState({ lado: 'frente' }),
      showVerso: () => this.setState({ lado: 'verso' }),
      toggleModelo: () => this.setState({ modelo: h ? 'vertical' : 'horizontal' }),
      protoAberto: !!this.state.proto,
      protoAtivacao: this.state.proto === 'ativacao',
      protoBloqueio: this.state.proto === 'bloqueio',
      protoSenha: this.state.proto === 'senha',
      protoVirtual: this.state.proto === 'virtual',
      abrirVirtual: () => this.setState({ proto: 'virtual' }),
      protoTitulo: ({ ativacao: 'Ativação do cartão físico', bloqueio: 'Bloqueio e desbloqueio', senha: 'Senha do cartão', virtual: 'Cartão virtual' })[this.state.proto] || '',
      abrirSenha: () => this.setState({ proto: 'senha' }),
      abrirProto: () => this.setState({ proto: 'ativacao' }),
      abrirBloqueio: () => this.setState({ proto: 'bloqueio' }),
      fecharProto: () => this.setState({ proto: false }),
    };
  }
}
Ideacao.defaultProps = {};
Ideacao.prototype.tpl = function (v) { return html`
<div style="width: 100%; box-sizing: border-box; background: #FFFFFF; color: #3E3E3E; font-family: Figtree, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; -webkit-font-smoothing: antialiased; padding: 120px 40px">
  <section style="width: 100%; max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 72px">

    <${C.TituloSecao} numero="05" etapa="Ideação" titulo="Uma solução para cada causa" subtitulo="Cada fluxo foi redesenhado a partir da causa encontrada na investigação." />

    <div style="display: flex; flex-direction: column; gap: 40px">

      <nav aria-label="Fluxos" style="display: flex; align-items: flex-end">
        <div style="display: flex; flex: 0 0 auto">
          ${(v.abas || []).map((a) => html`
            <button type="button" aria-current=${a.atual} onClick=${a.ir} style=${a.style}><span style=${a.numStyle}>${a.num}</span>${a.titulo}</button>
          `)}
        </div>
        <div aria-hidden="true" style="flex: 1 1 auto; border-bottom: 2px solid #E2E2E2"></div>
      </nav>

      <div style="overflow: hidden; margin: -24px; padding: 24px">
      <div style=${v.trilha}>

    <article aria-hidden=${v.oculto1} style=${v.slide1}>

      <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px">
        <div style="flex: 1 1 420px; min-width: 0; display: flex; flex-direction: column; justify-content: center; gap: 10px">
          <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #A6A6A6">Fluxo 01 de 04</p>
          <h3 style="margin: 0; font-size: 36px; font-weight: 700; line-height: 1.1; letter-spacing: -0.025em; color: #1A1A1A">Ativação do cartão físico</h3>
          <button type="button" onClick=${v.abrirProto} style="align-self: flex-start; display: inline-flex; align-items: center; gap: 10px; min-height: 44px; margin-top: 10px; padding: 0 20px 0 14px; border: 0; border-radius: 999px; background: #EA1D2C; color: #FFFFFF; font-size: 15px; font-weight: 700; cursor: pointer; box-shadow: 0 8px 20px rgba(234, 29, 44, 0.25)"><span aria-hidden="true" style="display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: rgba(255, 255, 255, 0.22)"><svg width="12" height="12" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5Z"></path></svg></span>Testar o fluxo</button>
        </div>
        <div style="flex: 0 1 520px; min-width: 0; display: flex; align-items: center; gap: 20px; padding: 16px 20px; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 14px">
          <div style="display: flex; flex-direction: column; gap: 6px; flex: 1 1 auto; min-width: 0">
            <p style="margin: 0; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #A6A6A6">Causa encontrada</p>
            <p style="margin: 0; font-size: 17px; font-weight: 600; line-height: 1.35; color: #3E3E3E">Dificuldade para encontrar o número do cartão</p>
          </div>
          <div style="flex: 0 0 auto; display: flex; flex-direction: column; align-items: flex-end; gap: 2px; padding-left: 20px; border-left: 1px solid #EBEBEB">
            <span style="font-size: 24px; font-weight: 700; line-height: 1; letter-spacing: -0.02em; font-variant-numeric: tabular-nums; color: #EA1D2C">26,7%</span>
            <span style="font-size: 13px; color: #A6A6A6">de abandono</span>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px">

        <div style="display: flex; flex-direction: column">
          <div style="position: relative; height: 460px; box-sizing: border-box; padding-top: 56px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; background: #F7F7F7; border-radius: 20px; overflow: hidden">
            <h4 style="position: absolute; left: 24px; top: 20px; right: 24px; margin: 0; font-size: 16px; font-weight: 700; line-height: 1.3; color: #1A1A1A">Status da entrega</h4>
            <img src="/assets/1afcda58a9a853616b497831591f5f83.png" alt="Card do cartão físico com o selo Novo, mostrando o status do pedido, a previsão e o local de entrega." style="display: block; width: 230px; height: auto; aspect-ratio: 189 / 264; filter: drop-shadow(0 18px 30px rgba(234, 29, 44, 0.25))" />
          </div>
        </div>

        <div style="display: flex; flex-direction: column">
          <div style="position: relative; height: 460px; box-sizing: border-box; padding-top: 56px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; background: #F7F7F7; border-radius: 20px; overflow: hidden">
            <h4 style="position: absolute; left: 24px; top: 20px; right: 24px; margin: 0; font-size: 16px; font-weight: 700; line-height: 1.3; color: #1A1A1A">Escolha do cartão</h4>
            <div role="group" aria-label="Lado do cartão" style="display: flex; gap: 8px">
              <button type="button" aria-pressed=${v.frentePressed} onClick=${v.showFrente} style=${v.chipFrente}>Frente do cartão</button>
              <button type="button" aria-pressed=${v.versoPressed} onClick=${v.showVerso} style=${v.chipVerso}>Verso do cartão</button>
            </div>
            <div style="display: flex; align-items: center; gap: 16px">
              <button type="button" aria-label="Modelo anterior" onClick=${v.toggleModelo} style="display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; padding: 0; border: 1px solid #E2E2E2; border-radius: 50%; background: #FFFFFF; color: #1A1A1A; cursor: pointer"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></button>
              <img src=${v.cardSrc} alt=${v.cardAlt} style="display: block; width: 176px; height: auto; aspect-ratio: 251 / 353; filter: drop-shadow(0 14px 24px rgba(0, 0, 0, 0.18))" />
              <button type="button" aria-label="Próximo modelo" onClick=${v.toggleModelo} style="display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; padding: 0; border: 1px solid #E2E2E2; border-radius: 50%; background: #FFFFFF; color: #1A1A1A; cursor: pointer"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
              <p aria-live="polite" style="margin: 0; font-size: 16px; font-weight: 600; color: #1A1A1A">${v.modeloLabel}</p>
              <div aria-hidden="true" style="display: flex; gap: 4px"><span style=${v.dot1}></span><span style=${v.dot2}></span></div>
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column">
          <div style="position: relative; height: 460px; box-sizing: border-box; padding-top: 56px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; background: #F7F7F7; border-radius: 20px; overflow: hidden">
            <h4 style="position: absolute; left: 24px; top: 20px; right: 24px; margin: 0; font-size: 16px; font-weight: 700; line-height: 1.3; color: #1A1A1A">Onde achar o código</h4>
            <img src="/assets/9cd9035586fecde069cc400399ff58ac.png" alt="Modal Código de ativação, com uma lupa mostrando onde fica o código de 15 dígitos no verso do cartão." style="display: block; width: 200px; height: auto; aspect-ratio: 327 / 566; background: #FFFFFF; border-radius: 18px; box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12)" />
          </div>
        </div>

      </div>
    </article>

    <article aria-hidden=${v.oculto2} style=${v.slide2}>

      <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px">
        <div style="flex: 1 1 420px; min-width: 0; display: flex; flex-direction: column; justify-content: center; gap: 10px">
          <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #A6A6A6">Fluxo 02 de 04</p>
          <h3 style="margin: 0; font-size: 36px; font-weight: 700; line-height: 1.1; letter-spacing: -0.025em; color: #1A1A1A">Bloqueio e desbloqueio</h3>
          <button type="button" onClick=${v.abrirBloqueio} style="align-self: flex-start; display: inline-flex; align-items: center; gap: 10px; min-height: 44px; margin-top: 10px; padding: 0 20px 0 14px; border: 0; border-radius: 999px; background: #EA1D2C; color: #FFFFFF; font-size: 15px; font-weight: 700; cursor: pointer; box-shadow: 0 8px 20px rgba(234, 29, 44, 0.25)"><span aria-hidden="true" style="display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: rgba(255, 255, 255, 0.22)"><svg width="12" height="12" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5Z"></path></svg></span>Testar o fluxo</button>
        </div>
        <div style="flex: 0 1 520px; min-width: 0; display: flex; align-items: center; gap: 20px; padding: 16px 20px; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 14px">
          <div style="display: flex; flex-direction: column; gap: 6px; flex: 1 1 auto; min-width: 0">
            <p style="margin: 0; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #A6A6A6">Causa encontrada</p>
            <p style="margin: 0; font-size: 17px; font-weight: 600; line-height: 1.35; color: #3E3E3E">Falta de feedback após a ação</p>
          </div>
          <div style="flex: 0 0 auto; display: flex; flex-direction: column; align-items: flex-end; gap: 2px; padding-left: 20px; border-left: 1px solid #EBEBEB">
            <span style="font-size: 24px; font-weight: 700; line-height: 1; letter-spacing: -0.02em; font-variant-numeric: tabular-nums; color: #EA1D2C">20,0%</span>
            <span style="font-size: 13px; color: #A6A6A6">de repetição de ações</span>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px">

        <div style="display: flex; flex-direction: column">
          <div style="position: relative; height: 460px; box-sizing: border-box; padding-top: 56px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; background: #F7F7F7; border-radius: 20px; overflow: hidden">
            <h4 style="position: absolute; left: 24px; top: 20px; right: 24px; margin: 0; font-size: 16px; font-weight: 700; line-height: 1.3; color: #1A1A1A">Cartão físico bloqueado</h4>
            <img src="/assets/4a29ef9eafe90ea89a7f9cab8c30273d.png" alt="Cartão físico com blur e um cadeado no centro, indicando que está bloqueado." style="display: block; width: 186px; height: auto; aspect-ratio: 543 / 768; filter: drop-shadow(0 18px 30px rgba(234, 29, 44, 0.25))" />
            <img src="/assets/54a06c7d35f33055ed935b73e73dde8f.png" alt="Aviso: Cartão bloqueado com sucesso!" style="display: block; width: 340px; height: auto; aspect-ratio: 978 / 192; max-width: calc(100% - 32px); filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.08))" />
          </div>
        </div>

        <div style="display: flex; flex-direction: column">
          <div style="position: relative; height: 460px; box-sizing: border-box; padding-top: 56px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #F7F7F7; border-radius: 20px; overflow: hidden">
            <h4 style="position: absolute; left: 24px; top: 20px; right: 24px; margin: 0; font-size: 16px; font-weight: 700; line-height: 1.3; color: #1A1A1A">Cartão virtual bloqueado</h4>
            <img src="/assets/110ffe9875692a279e51a28ff1cea716.png" alt="Cartão virtual laranja com blur, indicando que está bloqueado." style="display: block; width: 220px; height: auto; aspect-ratio: 543 / 768; filter: drop-shadow(0 18px 30px rgba(255, 117, 0, 0.28))" />
          </div>
        </div>

        <div style="display: flex; flex-direction: column">
          <div style="position: relative; height: 460px; box-sizing: border-box; padding-top: 56px; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; background: #F7F7F7; border-radius: 20px; overflow: hidden">
            <h4 style="position: absolute; left: 24px; top: 20px; right: 24px; margin: 0; font-size: 16px; font-weight: 700; line-height: 1.3; color: #1A1A1A">Desbloqueio com o código</h4>
            <img src="/assets/2f699d3dff0ee1b2f397cd0d6565a2aa.png" alt="Bottom sheet pedindo os 6 últimos dígitos do código de ativação para desbloquear o cartão." style="display: block; width: 250px; height: auto; aspect-ratio: 1125 / 1746; max-width: calc(100% - 24px); filter: drop-shadow(0 -12px 30px rgba(0, 0, 0, 0.1))" />
          </div>
        </div>

      </div>
    </article>

    <article aria-hidden=${v.oculto3} style=${v.slide3}>

      <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px">
        <div style="flex: 1 1 420px; min-width: 0; display: flex; flex-direction: column; justify-content: center; gap: 10px">
          <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #A6A6A6">Fluxo 03 de 04</p>
          <h3 style="margin: 0; font-size: 36px; font-weight: 700; line-height: 1.1; letter-spacing: -0.025em; color: #1A1A1A">Senha do cartão</h3>
          <button type="button" onClick=${v.abrirSenha} style="align-self: flex-start; display: inline-flex; align-items: center; gap: 10px; min-height: 44px; margin-top: 10px; padding: 0 20px 0 14px; border: 0; border-radius: 999px; background: #EA1D2C; color: #FFFFFF; font-size: 15px; font-weight: 700; cursor: pointer; box-shadow: 0 8px 20px rgba(234, 29, 44, 0.25)"><span aria-hidden="true" style="display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: rgba(255, 255, 255, 0.22)"><svg width="12" height="12" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5Z"></path></svg></span>Testar o fluxo</button>
        </div>
        <div style="flex: 0 1 520px; min-width: 0; display: flex; align-items: center; gap: 20px; padding: 16px 20px; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 14px">
          <div style="display: flex; flex-direction: column; gap: 6px; flex: 1 1 auto; min-width: 0">
            <p style="margin: 0; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #A6A6A6">Causa encontrada</p>
            <p style="margin: 0; font-size: 17px; font-weight: 600; line-height: 1.35; color: #3E3E3E">Dificuldade com o número do cartão e a senha do app</p>
          </div>
          <div style="flex: 0 0 auto; display: flex; flex-direction: column; align-items: flex-end; gap: 2px; padding-left: 20px; border-left: 1px solid #EBEBEB">
            <span style="font-size: 24px; font-weight: 700; line-height: 1; letter-spacing: -0.02em; font-variant-numeric: tabular-nums; color: #EA1D2C">36,7%</span>
            <span style="font-size: 13px; color: #A6A6A6">de hesitação</span>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px">

        <div style="display: flex; flex-direction: column">
          <div style="position: relative; height: 460px; box-sizing: border-box; padding-top: 56px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #F7F7F7; border-radius: 20px; overflow: hidden">
            <h4 style="position: absolute; left: 24px; top: 20px; right: 24px; margin: 0; font-size: 16px; font-weight: 700; line-height: 1.3; color: #1A1A1A">Label “Senha do aplicativo”</h4>
            <div style="width: 440px; max-width: calc(100% - 48px); box-sizing: border-box; padding: 24px; background: #FFFFFF; border-radius: 18px; box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08)">
              <img src="/assets/b554a8a5770389165bb35b79032050b7.png" alt="Campo com a label Senha do aplicativo, preenchido com asteriscos e com o ícone de mostrar senha." style="display: block; width: 100%; height: auto; aspect-ratio: 981 / 210" />
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column">
          <div style="position: relative; height: 460px; box-sizing: border-box; padding-top: 56px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #F7F7F7; border-radius: 20px; overflow: hidden">
            <h4 style="position: absolute; left: 24px; top: 20px; right: 24px; margin: 0; font-size: 16px; font-weight: 700; line-height: 1.3; color: #1A1A1A">Ajuda para achar o código</h4>
            <div style="width: 440px; max-width: calc(100% - 48px); display: flex; flex-direction: column; align-items: center">
              <div style="width: 100%; box-sizing: border-box; padding: 24px; background: #FFFFFF; border-radius: 18px; box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08)">
                <img src="/assets/4382db9758b70d5f83be8e1551d9caa8.png" alt="Campo Seis últimos dígitos do código de ativação, com um ícone de ajuda ao lado da label." style="display: block; width: 100%; height: auto; aspect-ratio: 981 / 205" />
              </div>
              <svg aria-hidden="true" viewBox="0 0 440 56" width="100%" height="40" preserveAspectRatio="none" style="display: block; overflow: visible"><path d="M 373 4 C 373 34, 300 24, 262 48" fill="none" stroke="#3767E1" stroke-width="2" stroke-dasharray="5 5" stroke-linecap="round"></path><path d="M 262 48 l 3 -10 M 262 48 l 10 -2" fill="none" stroke="#3767E1" stroke-width="2" stroke-linecap="round"></path></svg>
              <img src="/assets/24e2f965601c74d69aa4b000248d7322.png" alt="Modal Código de ativação, que abre ao tocar no ícone de ajuda e mostra onde fica o código no verso do cartão." style="display: block; width: 140px; height: auto; aspect-ratio: 981 / 1698; margin-top: 4px; filter: drop-shadow(0 18px 30px rgba(0, 0, 0, 0.12))" />
            </div>
          </div>
        </div>

      </div>
    </article>

    <article aria-hidden=${v.oculto4} style=${v.slide4}>

      <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px">
        <div style="flex: 1 1 420px; min-width: 0; display: flex; flex-direction: column; justify-content: center; gap: 10px">
          <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #A6A6A6">Fluxo 04 de 04</p>
          <h3 style="margin: 0; font-size: 36px; font-weight: 700; line-height: 1.1; letter-spacing: -0.025em; color: #1A1A1A">Cartão virtual</h3>
          <button type="button" onClick=${v.abrirVirtual} style="align-self: flex-start; display: inline-flex; align-items: center; gap: 10px; min-height: 44px; margin-top: 10px; padding: 0 20px 0 14px; border: 0; border-radius: 999px; background: #EA1D2C; color: #FFFFFF; font-size: 15px; font-weight: 700; cursor: pointer; box-shadow: 0 8px 20px rgba(234, 29, 44, 0.25)"><span aria-hidden="true" style="display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: rgba(255, 255, 255, 0.22)"><svg width="12" height="12" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5Z"></path></svg></span>Testar o fluxo</button>
        </div>
        <div style="flex: 0 1 520px; min-width: 0; display: flex; align-items: center; gap: 20px; padding: 16px 20px; background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 14px">
          <div style="display: flex; flex-direction: column; gap: 6px; flex: 1 1 auto; min-width: 0">
            <p style="margin: 0; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #A6A6A6">Causa encontrada</p>
            <p style="margin: 0; font-size: 17px; font-weight: 600; line-height: 1.35; color: #3E3E3E">Dificuldade para encontrar a área de cartões virtuais</p>
          </div>
          <div style="flex: 0 0 auto; display: flex; flex-direction: column; align-items: flex-end; gap: 2px; padding-left: 20px; border-left: 1px solid #EBEBEB">
            <span style="font-size: 24px; font-weight: 700; line-height: 1; letter-spacing: -0.02em; font-variant-numeric: tabular-nums; color: #EA1D2C">23,4%</span>
            <span style="font-size: 13px; color: #A6A6A6">de hesitação</span>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px">

        <div style="display: flex; flex-direction: column">
          <div style="position: relative; height: 460px; box-sizing: border-box; padding-top: 56px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #F7F7F7; border-radius: 20px; overflow: hidden">
            <h4 style="position: absolute; left: 24px; top: 20px; right: 24px; margin: 0; font-size: 16px; font-weight: 700; line-height: 1.3; color: #1A1A1A">Tab físico e virtual</h4>
            <div style="width: 340px; max-width: calc(100% - 32px); box-sizing: border-box; display: flex; flex-direction: column; gap: 28px; padding: 28px 24px; background: #FFFFFF; border-radius: 18px; box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08)">
              <img src="/assets/1754d56e7c1f1c90915d09a6ac67579a.png" alt="Abas Cartão físico e Cartões virtuais, com Cartão físico selecionada." style="display: block; width: 100%; height: auto; aspect-ratio: 981 / 120; opacity: 0.4" />
              <img src="/assets/6c758bfc6d7692ca1ee64ec339dad9c6.png" alt="Abas Cartão físico e Cartões virtuais, com Cartões virtuais selecionada." style="display: block; width: 100%; height: auto; aspect-ratio: 981 / 120" />
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column">
          <div style="position: relative; height: 460px; box-sizing: border-box; padding-top: 56px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #F7F7F7; border-radius: 20px; overflow: hidden">
            <h4 style="position: absolute; left: 24px; top: 20px; right: 24px; margin: 0; font-size: 16px; font-weight: 700; line-height: 1.3; color: #1A1A1A">Criar cartão virtual</h4>
            <div style="width: 270px; max-width: calc(100% - 32px); box-sizing: border-box; padding: 24px 22px; background: #FFFFFF; border-radius: 18px; box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08)">
              <img src="/assets/9f03fc56aab0d099f6dbd60f3da872ca.png" alt="Ilustração de cartão com alerta, o texto Você ainda não possui nenhum cartão virtual ativo e o botão Criar novo cartão virtual." style="display: block; width: 100%; height: auto; aspect-ratio: 981 / 1220" />
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column">
          <div style="position: relative; height: 460px; box-sizing: border-box; padding-top: 56px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; background: #F7F7F7; border-radius: 20px; overflow: hidden">
            <h4 style="position: absolute; left: 24px; top: 20px; right: 24px; margin: 0; font-size: 16px; font-weight: 700; line-height: 1.3; color: #1A1A1A">Cartões e suas categorias</h4>
            <div role="group" aria-label="Tipo de cartão virtual" style="display: flex; gap: 8px">
              <button type="button" aria-pressed=${v.voucherPressed} onClick=${v.showVoucher} style=${v.chipVoucher}>Voucher</button>
              <button type="button" aria-pressed=${v.creditoPressed} onClick=${v.showCredito} style=${v.chipCredito}>Crédito</button>
            </div>
            <button type="button" aria-label="Trocar entre voucher e crédito" onClick=${v.toggleVirtual} style="padding: 0; border: 0; background: transparent; cursor: pointer; border-radius: 14px"><img src=${v.virtCard} alt=${v.virtAlt} style="display: block; width: 120px; height: auto; aspect-ratio: 543 / 768; filter: drop-shadow(0 14px 24px rgba(0, 0, 0, 0.18))" /></button>
            <div style="width: 300px; max-width: calc(100% - 32px); box-sizing: border-box; padding: 14px 16px; background: #FFFFFF; border-radius: 16px; box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06)">
              <img src=${v.virtCat} alt=${v.virtCatAlt} style=${v.virtCatStyle} />
            </div>
          </div>
        </div>

      </div>
    </article>

      </div>
      </div>
    </div>

  </section>

    ${(v.protoAberto) ? html`
      <div role="dialog" aria-modal="true" aria-label=${v.protoTitulo} style="position: fixed; inset: 0; z-index: 50; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; padding: 16px; background: rgba(20, 20, 20, 0.78)">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; width: 308px">
          <p style="margin: 0; font-size: 14px; font-weight: 600; color: #FFFFFF">${v.protoTitulo}</p>
          <button type="button" onClick=${v.fecharProto} style="display: inline-flex; align-items: center; gap: 6px; min-height: 36px; padding: 0 14px; border: 0; border-radius: 999px; background: #FFFFFF; color: #1A1A1A; font-size: 14px; font-weight: 700; cursor: pointer"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"></path></svg>Fechar</button>
        </div>
        <div style="width: 308px; height: 667px; flex: 0 0 auto">
          <div style="width: 375px; height: 812px; transform: scale(0.82); transform-origin: top left; border-radius: 44px; box-shadow: 0 0 0 10px #111111, 0 30px 80px rgba(0, 0, 0, 0.5)">
            ${(v.protoAtivacao) ? html`<${C.PrototipoAtivacao}  />` : null}
            ${(v.protoBloqueio) ? html`<${C.PrototipoBloqueio}  />` : null}
            ${(v.protoSenha) ? html`<${C.PrototipoSenha}  />` : null}
            ${(v.protoVirtual) ? html`<${C.PrototipoVirtual}  />` : null}
          </div>
        </div>
      </div>
    ` : null}
</div>
`; };
C.Ideacao = Ideacao;

class Desafio extends DCLogic {
  renderVals() {
    return {};
  }
}
Desafio.defaultProps = {};
Desafio.prototype.tpl = function (v) { return html`
<div style="width: 100%; box-sizing: border-box; background: #F7F7F7; color: #3E3E3E; font-family: Figtree, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; -webkit-font-smoothing: antialiased; padding: 120px 40px">
  <section style="width: 100%; max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 56px">

    <${C.TituloSecao} numero="02" etapa="Desafio e Responsabilidades" titulo="O que precisava ser resolvido, e como eu atuei" subtitulo="" />

    <div style="display: flex; flex-direction: column; gap: 20px; padding: 56px; background: #FFFFFF; border-radius: 20px">
      <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #717171">O desafio</p>
      <p style="margin: 0; max-width: 1000px; font-size: 40px; font-weight: 700; line-height: 1.2; letter-spacing: -0.025em; text-wrap: balance; color: #1A1A1A">Como <span style="color: #EA1D2C">adaptar as jornadas de cartão</span> ao novo modelo panless e, ao mesmo tempo, <span style="color: #EA1D2C">reduzir as fricções que já existiam</span> na gestão de cartões?</p>
    </div>

    <div style="display: flex; flex-direction: column; gap: 28px">
      <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #717171">Minha atuação · da investigação à análise dos resultados</p>
      <div style="overflow-x: auto">
        <div style="min-width: 980px; display: flex; flex-direction: column; gap: 32px">
          <div style="display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 12px">
          <div style="grid-column: 1 / span 3; padding: 14px 20px; background: #FFFFFF; border-radius: 10px; font-size: 13px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #717171">Investigação</div>
          <div style="grid-column: 4 / span 1; padding: 14px 20px; background: #FFFFFF; border-radius: 10px; font-size: 13px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #717171">Definição</div>
          <div style="grid-column: 5 / span 2; padding: 14px 20px; background: #FFFFFF; border-radius: 10px; font-size: 13px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #717171">Ideação e testes</div>
          <div style="grid-column: 7 / span 1; padding: 14px 20px; background: #FDE8EA; border-radius: 10px; font-size: 13px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #EA1D2C">Impacto</div>
          </div>
          <div style="position: relative; display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 0">
            <span aria-hidden="true" style="position: absolute; left: 14px; right: 0; top: 13px; height: 2px; background: #DCDCDC"></span>
          <div style="display: flex; flex-direction: column; gap: 10px; padding-right: 16px">
            <span aria-hidden="true" style="position: relative; z-index: 1; display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 50%; background: #1A1A1A"><span style="width: 10px; height: 10px; border-radius: 50%; background: #FFFFFF"></span></span>
            <p style="margin: 12px 0 0; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; font-variant-numeric: tabular-nums; color: #A6A6A6">01</p>
            <h4 style="margin: 0; font-size: 20px; font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; color: #1A1A1A">Mapeamento</h4>
            <p style="margin: 0; font-size: 15px; line-height: 1.45; color: #717171">Fluxos de gestão de cartões no app</p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 10px; padding-right: 16px">
            <span aria-hidden="true" style="position: relative; z-index: 1; display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 50%; background: #1A1A1A"><span style="width: 10px; height: 10px; border-radius: 50%; background: #FFFFFF"></span></span>
            <p style="margin: 12px 0 0; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; font-variant-numeric: tabular-nums; color: #A6A6A6">02</p>
            <h4 style="margin: 0; font-size: 20px; font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; color: #1A1A1A">Entrevistas CX</h4>
            <p style="margin: 0; font-size: 15px; line-height: 1.45; color: #717171">Dúvidas, reclamações e dificuldades</p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 10px; padding-right: 16px">
            <span aria-hidden="true" style="position: relative; z-index: 1; display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 50%; background: #1A1A1A"><span style="width: 10px; height: 10px; border-radius: 50%; background: #FFFFFF"></span></span>
            <p style="margin: 12px 0 0; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; font-variant-numeric: tabular-nums; color: #A6A6A6">03</p>
            <h4 style="margin: 0; font-size: 20px; font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; color: #1A1A1A">Análise de dados</h4>
            <p style="margin: 0; font-size: 15px; line-height: 1.45; color: #717171">Zendesk, Google Analytics e Clarity</p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 10px; padding-right: 16px">
            <span aria-hidden="true" style="position: relative; z-index: 1; display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 50%; background: #1A1A1A"><span style="width: 10px; height: 10px; border-radius: 50%; background: #FFFFFF"></span></span>
            <p style="margin: 12px 0 0; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; font-variant-numeric: tabular-nums; color: #A6A6A6">04</p>
            <h4 style="margin: 0; font-size: 20px; font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; color: #1A1A1A">Priorização</h4>
            <p style="margin: 0; font-size: 15px; line-height: 1.45; color: #717171">Matriz MoSCoW com Produto e Engenharia</p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 10px; padding-right: 16px">
            <span aria-hidden="true" style="position: relative; z-index: 1; display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 50%; background: #1A1A1A"><span style="width: 10px; height: 10px; border-radius: 50%; background: #FFFFFF"></span></span>
            <p style="margin: 12px 0 0; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; font-variant-numeric: tabular-nums; color: #A6A6A6">05</p>
            <h4 style="margin: 0; font-size: 20px; font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; color: #1A1A1A">UI Design</h4>
            <p style="margin: 0; font-size: 15px; line-height: 1.45; color: #717171">Nova experiência dos fluxos de cartões</p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 10px; padding-right: 16px">
            <span aria-hidden="true" style="position: relative; z-index: 1; display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 50%; background: #1A1A1A"><span style="width: 10px; height: 10px; border-radius: 50%; background: #FFFFFF"></span></span>
            <p style="margin: 12px 0 0; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; font-variant-numeric: tabular-nums; color: #A6A6A6">06</p>
            <h4 style="margin: 0; font-size: 20px; font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; color: #1A1A1A">Testes</h4>
            <p style="margin: 0; font-size: 15px; line-height: 1.45; color: #717171">Já em produção com colaboradores Caju</p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 10px; padding-right: 16px">
            <span aria-hidden="true" style="position: relative; z-index: 1; display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 50%; background: #EA1D2C"><span style="width: 10px; height: 10px; border-radius: 50%; background: #FFFFFF"></span></span>
            <p style="margin: 12px 0 0; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; font-variant-numeric: tabular-nums; color: #EA1D2C">07</p>
            <h4 style="margin: 0; font-size: 20px; font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; color: #1A1A1A">Resultados</h4>
            <p style="margin: 0; font-size: 15px; line-height: 1.45; color: #717171">Análise pós-lançamento</p>
          </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</div>
`; };
C.Desafio = Desafio;

class Aprendizados extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { abertos: [false, false, false, false] };
  }
  renderVals() {
    const itens = [
      { titulo: 'Uma mudança obrigatória pode ser uma oportunidade', texto: 'Ir além do que a regulamentação pedia foi o que gerou o impacto real.' },
      { titulo: 'Números mostram onde, comportamento mostra por quê', texto: 'Zendesk e Google Analytics dimensionaram o problema; o Clarity explicou as causas.' },
      { titulo: 'O CX é uma fonte de pesquisa subestimada', texto: 'Quem atende as pessoas usuárias todos os dias já tem as primeiras hipóteses.' },
      { titulo: 'O que eu faria diferente hoje?', texto: 'Usaria IA para analisar os ~3.700 tickets e as 120 gravações de sessão, categorizando queixas e padrões em escala e liberando tempo para aprofundar as causas. Também usaria IA na construção das interfaces.', reflexao: true },
    ];
    const abertos = this.state.abertos;
    const total = abertos.filter(Boolean).length;
    const todos = total === itens.length;
    const abrir = (i) => () => {
      const novo = abertos.slice();
      novo[i] = true;
      this.setState({ abertos: novo });
    };
    const proximo = abertos.indexOf(false);
    return {
      contador: total + ' de ' + itens.length,
      botaoTexto: todos ? 'Recomeçar' : (total === 0 ? 'Revelar primeiro' : 'Próximo aprendizado'),
      botaoIcone: todos ? 'M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5' : 'M5 12h14M13 6l6 6-6 6',
      botaoStyle: 'display: inline-flex; align-items: center; gap: 10px; min-height: 48px; padding: 0 22px; border-radius: 999px; font-size: 15px; font-weight: 700; cursor: pointer; ' + (todos ? 'border: 1px solid #E2E2E2; background: #FFFFFF; color: #1A1A1A;' : 'border: 0; background: #EA1D2C; color: #FFFFFF; box-shadow: 0 8px 20px rgba(234, 29, 44, 0.25);'),
      acao: todos ? () => this.setState({ abertos: itens.map(() => false) }) : abrir(proximo),
      cards: itens.map((it, i) => {
        const r = !!it.reflexao;
        const aberto = abertos[i];
        const liStyle = 'display: flex; min-width: 0;' + (r ? ' grid-column: 1 / -1;' : '');
        return {
          titulo: it.titulo, texto: it.texto, liStyle,
          num: r ? '?' : '0' + (i + 1),
          aberto, fechado: !aberto,
          rotulo: 'Revelar ' + (r ? 'o que eu faria diferente hoje' : 'aprendizado 0' + (i + 1)),
          abrir: abrir(i),
          cardStyle: 'flex: 1 1 auto; min-width: 0; box-sizing: border-box; display: flex; flex-direction: column; gap: 14px; padding: 28px 32px; border-radius: 20px; ' + (r ? 'background: #1A1A1A;' : 'background: #FFFFFF; border: 1px solid #EBEBEB;'),
          numStyle: 'font-size: 14px; font-weight: 700; letter-spacing: 0.06em; font-variant-numeric: tabular-nums; color: ' + (r ? '#FF6B76' : '#EA1D2C') + ';',
          tituloStyle: 'margin: 0; font-size: 24px; font-weight: 700; line-height: 1.2; letter-spacing: -0.015em; color: ' + (r ? '#FFFFFF' : '#1A1A1A') + ';',
          textoStyle: 'margin: ' + (r ? '0' : 'auto 0 0') + '; font-size: 16px; line-height: 1.5; color: ' + (r ? 'rgba(255, 255, 255, 0.82)' : '#717171') + ';',
        };
      }),
    };
  }
}
Aprendizados.defaultProps = {};
Aprendizados.prototype.tpl = function (v) { return html`
<div style="width: 100%; box-sizing: border-box; background: #F7F7F7; color: #3E3E3E; font-family: Figtree, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; -webkit-font-smoothing: antialiased; padding: 120px 40px">
  <section style="width: 100%; max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 72px">

    <div style="display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 24px">
      <div style="flex: 1 1 640px; min-width: 0">
        <${C.TituloSecao} numero="08" etapa="Aprendizados" titulo="O que eu aprendi com esse projeto?" />
      </div>
      <div style="display: flex; align-items: center; gap: 16px">
        <span aria-live="polite" style="font-size: 14px; font-weight: 600; font-variant-numeric: tabular-nums; color: #A6A6A6">${v.contador}</span>
        <button type="button" onClick=${v.acao} style=${v.botaoStyle}>${v.botaoTexto}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${v.botaoIcone}></path></svg></button>
      </div>
    </div>

    <ol style="list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); grid-auto-rows: 240px; gap: 16px">
      ${(v.cards || []).map((c) => html`
        <li style=${c.liStyle}>
          ${(c.aberto) ? html`
            <div class="revelado" style=${c.cardStyle}>
              <span style=${c.numStyle}>${c.num}</span>
              <h3 style=${c.tituloStyle}>${c.titulo}</h3>
              <p style=${c.textoStyle}>${c.texto}</p>
            </div>
          ` : null}
          ${(c.fechado) ? html`
            <button type="button" class="oculto" aria-label=${c.rotulo} onClick=${c.abrir} style="flex: 1 1 auto; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; padding: 0; border: 1.5px dashed #D6D6D6; border-radius: 20px; background: transparent; color: #B4B4B4; cursor: pointer; transition: border-color 200ms ease, color 200ms ease">
              <span style="font-size: 28px; font-weight: 800; letter-spacing: -0.02em; font-variant-numeric: tabular-nums">${c.num}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg>
            </button>
          ` : null}
        </li>
      `)}
    </ol>

  </section>
</div>
`; };
C.Aprendizados = Aprendizados;

class Testes extends DCLogic {
  renderVals() {
    const base = 'position: relative; display: flex; flex-direction: column; gap: 40px; min-height: 240px; box-sizing: border-box; padding: 28px; border-radius: 20px; ';
    const etapas = [
      { titulo: 'Colaboradores', texto: 'Todas as pessoas da Caju participaram como usuárias.',
        icone: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' },
      { titulo: 'Tarefas reais', texto: 'Cada pessoa executou os fluxos no próprio cartão.',
        icone: 'M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM3 10h18M7 15h4' },
      { titulo: 'Canal no Slack', texto: 'As inconsistências eram reportadas em um canal dedicado.',
        icone: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zM8 9h8M8 13h5' },
      { titulo: 'Correções', texto: 'Os ajustes foram feitos antes da abertura para todos os usuários.',
        icone: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z' },
    ];
    return {
      etapas: etapas.map((e, i) => {
        const destaque = i === etapas.length - 1;
        return Object.assign({}, e, {
          num: '0' + (i + 1),
          iconeStyle: 'display: flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 14px; color: #EA1D2C; background: ' + (destaque ? '#FFFFFF' : '#FDECEE') + ';',
          card: base + (destaque ? 'background: #FDECEE; border: 1px solid #F8C9CE;' : 'background: #FFFFFF; border: 1px solid #EBEBEB;'),
        });
      }),
    };
  }
}
Testes.defaultProps = {};
Testes.prototype.tpl = function (v) { return html`
<div style="width: 100%; box-sizing: border-box; background: #F7F7F7; color: #3E3E3E; font-family: Figtree, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; -webkit-font-smoothing: antialiased; padding: 120px 40px">
  <section style="width: 100%; max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 72px">

    <${C.TituloSecao} numero="06" etapa="Testes" titulo="Testes em produção" subtitulo="Como o prazo era definido pela regulamentação do BACEN, validamos direto no ambiente real, com todos os colaboradores da Caju." />

    <ol style="list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px">
      ${(v.etapas || []).map((e) => html`
        <li style=${e.card}>
          <div style="display: flex; align-items: center; justify-content: space-between">
            <span style=${e.iconeStyle}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${e.icone}></path></svg>
            </span>
            <span style="font-size: 14px; font-weight: 700; letter-spacing: 0.06em; font-variant-numeric: tabular-nums; color: #EA1D2C">${e.num}</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px">
            <h3 style="margin: 0; font-size: 22px; font-weight: 700; line-height: 1.2; letter-spacing: -0.015em; color: #1A1A1A">${e.titulo}</h3>
            <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #717171">${e.texto}</p>
          </div>
        </li>
      `)}
    </ol>

  </section>
</div>
`; };
C.Testes = Testes;

class Agradecimento extends DCLogic {
  renderVals() {
    return {};
  }
}
Agradecimento.defaultProps = {};
Agradecimento.prototype.tpl = function (v) { return html`
<footer style="width: 100%; min-height: 860px; box-sizing: border-box; display: flex; flex-direction: column; background: #1A1A1A; color: #FFFFFF; font-family: Figtree, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; -webkit-font-smoothing: antialiased; padding: 96px 40px 80px">
  <div style="flex: 1 1 auto; width: 100%; max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column">

    <div style="flex: 1 1 auto; display: flex; flex-direction: column; justify-content: center; gap: 24px; padding: 64px 0">
      <h2 style="margin: 0; font-size: 152px; font-weight: 800; line-height: 0.95; letter-spacing: -0.05em; color: #FFFFFF">Muito obrigado!</h2>
      <p style="margin: 0; font-size: 28px; font-weight: 500; line-height: 1.3; color: rgba(255, 255, 255, 0.88)">Ficou alguma dúvida?</p>
    </div>

    <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 24px; padding-top: 40px; border-top: 1px solid rgba(255, 255, 255, 0.2)">
      <div style="display: flex; flex-direction: column; gap: 6px">
        <p style="margin: 0; font-size: 26px; font-weight: 700; letter-spacing: -0.01em; color: #FFFFFF">Arthur Magalhães</p>
        <p style="margin: 0; font-size: 17px; color: rgba(255, 255, 255, 0.8)">Product Designer</p>
      </div>
      <ul style="list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 10px">
        <li><a class="contato" href="https://www.linkedin.com/in/arthuramagalhaes/" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; min-height: 44px; padding: 0 18px; border: 1px solid rgba(255, 255, 255, 0.85); border-radius: 999px; color: #FFFFFF; font-size: 15px; font-weight: 500; text-decoration: none">linkedin.com/in/arthuramagalhaes/</a></li>
        <li><a class="contato" href="mailto:arthurmagalhaes84@gmail.com" style="display: inline-flex; align-items: center; min-height: 44px; padding: 0 18px; border: 1px solid rgba(255, 255, 255, 0.85); border-radius: 999px; color: #FFFFFF; font-size: 15px; font-weight: 500; text-decoration: none">arthurmagalhaes84@gmail.com</a></li>
        <li><a class="contato" href="tel:+5534991534072" style="display: inline-flex; align-items: center; min-height: 44px; padding: 0 18px; border: 1px solid rgba(255, 255, 255, 0.85); border-radius: 999px; color: #FFFFFF; font-size: 15px; font-weight: 500; text-decoration: none">+55 (34) 99153-4072</a></li>
      </ul>
    </div>

  </div>
</footer>
`; };
C.Agradecimento = Agradecimento;

class TituloSecao extends DCLogic {
  renderVals() {
    const subtitulo = this.props.subtitulo ?? '';
    return {
      numero: this.props.numero ?? '01',
      etapa: this.props.etapa ?? 'Contexto',
      titulo: this.props.titulo ?? 'Por que o projeto começou?',
      subtitulo,
      temSubtitulo: subtitulo.length > 0,
    };
  }
}
TituloSecao.defaultProps = {"numero": "01", "etapa": "Contexto", "titulo": "Por que o projeto começou?", "subtitulo": ""};
TituloSecao.prototype.tpl = function (v) { return html`
<header style="width: 100%; display: flex; flex-direction: column; gap: 16px; font-family: Figtree, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; color: #1A1A1A">
  <p style="display: flex; align-items: center; gap: 10px; margin: 0; font-size: 14px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #EA1D2C"><span style="font-variant-numeric: tabular-nums">${v.numero}</span><span aria-hidden="true" style="display: inline-block; flex: 0 0 5px; width: 5px; height: 5px; border-radius: 50%; background: #EA1D2C"></span>${v.etapa}</p>
  <h2 style="margin: 0; max-width: 900px; font-size: 48px; font-weight: 700; line-height: 1.1; letter-spacing: -0.03em; text-wrap: balance; color: #1A1A1A">${v.titulo}</h2>
  ${(v.temSubtitulo) ? html`
    <p style="margin: 0; max-width: 680px; font-size: 20px; line-height: 1.5; color: #717171; text-wrap: pretty">${v.subtitulo}</p>
  ` : null}
</header>
`; };
C.TituloSecao = TituloSecao;

class Resultados extends DCLogic {
  renderVals() {
    const dados = [
      { label: 'Ativação', valor: '−4,5 p.p.', texto: 'na taxa de abandono da ativação de cartões (12% → 7,5%)', altura: 380 },
      { label: 'Atendimento', valor: '−30,5%', texto: 'nos tickets relacionados à gestão de cartões', altura: 520, destaque: true },
      { label: 'Suporte', valor: '~1.000', texto: 'atendimentos de suporte a menos', altura: 300 },
    ];
    return {
      colunas: dados.map((d, i) => {
        const on = !!d.destaque;
        const atraso = (i * 120) + 'ms';
        return {
          label: d.label, valor: d.valor, texto: d.texto,
          coluna: 'display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box; height: ' + d.altura + 'px; padding: 32px; border-radius: 20px 20px 0 0; animation-delay: ' + atraso + '; background: ' + (on ? '#EA1D2C' : '#F4F4F4') + ';',
          rotulo: 'margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; animation-delay: ' + (i * 120 + 500) + 'ms; color: ' + (on ? 'rgba(255, 255, 255, 0.8)' : '#8A8A8A') + ';',
          blocoTexto: 'display: flex; flex-direction: column; gap: 10px; animation-delay: ' + (i * 120 + 560) + 'ms;',
          numero: 'margin: 0; font-size: ' + (on ? 84 : 60) + 'px; font-weight: 800; line-height: 1; letter-spacing: -0.04em; font-variant-numeric: tabular-nums; white-space: nowrap; color: ' + (on ? '#FFFFFF' : '#1A1A1A') + ';',
          desc: 'margin: 0; max-width: 300px; font-size: 17px; line-height: 1.45; color: ' + (on ? '#FFFFFF' : '#717171') + ';',
        };
      }),
    };
  }
}
Resultados.defaultProps = {};
Resultados.prototype.tpl = function (v) { return html`
<div style="width: 100%; box-sizing: border-box; background: #FFFFFF; color: #3E3E3E; font-family: Figtree, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; -webkit-font-smoothing: antialiased; padding: 120px 40px">
  <section style="width: 100%; max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 72px">

    <${C.TituloSecao} numero="07" etapa="Resultados" titulo="Resultados após o lançamento" subtitulo="Três meses após o lançamento." />

    <div style="display: flex; flex-direction: column; gap: 40px">
      <div role="list" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); align-items: end; gap: 16px; height: 520px; border-bottom: 2px solid #E2E2E2">
        ${(v.colunas || []).map((c) => html`
          <div role="listitem" class="coluna" style=${c.coluna}>
            <p class="coluna-conteudo" style=${c.rotulo}>${c.label}</p>
            <div class="coluna-conteudo" style=${c.blocoTexto}>
              <p style=${c.numero}>${c.valor}</p>
              <p style=${c.desc}>${c.texto}</p>
            </div>
          </div>
        `)}
      </div>

      <div style="display: flex; flex-direction: column; gap: 12px; padding: 32px; border: 1px solid #EBEBEB; border-radius: 20px">
        <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #EA1D2C">Conclusão</p>
        <p style="margin: 0; max-width: 980px; font-size: 20px; line-height: 1.5; color: #3E3E3E">Ao ir além da adaptação exigida pelo BACEN e atacar as fricções que mais pesavam na experiência, o projeto trouxe ganhos dos dois lados: <strong style="font-weight: 700; color: #1A1A1A">mais pessoas concluindo a ativação do cartão na primeira tentativa</strong> e <strong style="font-weight: 700; color: #1A1A1A">menos dúvidas chegando ao atendimento</strong>.</p>
      </div>
    </div>

  </section>
</div>
`; };
C.Resultados = Resultados;

class PaginaHorizontal extends DCLogic {
  constructor(props) {
    super(props);
    let liberado = false;
    try { liberado = sessionStorage.getItem('case-caju-liberado') === '1'; } catch (e) {}
    this.state = { liberado, valor: '', erro: false, ver: false, tentativa: 0 };
  }
  renderVals() {
    const s = this.state;
    const SENHA = 'foodlover';
    const normaliza = (v) => String(v || '').replace(/\s+/g, '').replace(/^#+/, '').toLowerCase();
    const entrar = (e) => {
      if (e && e.preventDefault) e.preventDefault();
      const campo = typeof document !== 'undefined' ? document.getElementById('senha-case') : null;
      const valor = campo && campo.value != null ? campo.value : this.state.valor;
      if (!normaliza(valor)) return;
      if (normaliza(valor) === SENHA) {
        try { sessionStorage.setItem('case-caju-liberado', '1'); } catch (err) {}
        this.setState({ liberado: true, erro: false, valor });
      } else {
        this.setState({ erro: true, valor, tentativa: this.state.tentativa + 1 });
      }
    };
    const fonte = "font-family: Figtree, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;";
    return {
      bloqueado: !s.liberado,
      mainOculto: s.liberado ? 'false' : 'true',
      mainStyle: 'width: 100%; display: flex; flex-direction: column; background: #F7F7F7; ' + fonte + (s.liberado ? '' : ' height: 100vh; overflow: hidden; pointer-events: none; user-select: none;'),
      entrar,
      valor: s.valor,
      digitar: (e) => this.setState({ valor: e.target.value, erro: false }),
      tipoCampo: s.ver ? 'text' : 'password',
      alternarOlho: () => this.setState({ ver: !s.ver }),
      olhoLabel: s.ver ? 'Esconder senha' : 'Mostrar senha',
      olhoIcone: s.ver ? 'M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.1A10 10 0 0 1 12 5c6 0 10 7 10 7a17 17 0 0 1-3.1 3.9M6.6 6.6C3.9 8.4 2 12 2 12s4 7 10 7a9.7 9.7 0 0 0 5.4-1.6' : 'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
      invalido: s.erro ? 'true' : 'false',
      modalClasse: 'modal-senha' + (s.erro ? (s.tentativa % 2 ? ' erroA' : ' erroB') : '') ,
      campoStyle: 'width: 100%; box-sizing: border-box; height: 52px; padding: 0 56px 0 18px; border: 1.5px solid ' + (s.erro ? '#D0112B' : '#E2E2E2') + '; border-radius: 14px; background: ' + (s.erro ? '#FFF5F6' : '#FFFFFF') + '; color: #1A1A1A; font-size: 16px; ' + fonte,
      erro: s.erro,
      temSenha: !!String(s.valor).trim(),
      semSenha: !String(s.valor).trim(),
      labelStyle: 'font-size: 14px; font-weight: 600; color: ' + (s.erro ? '#D0112B' : '#3E3E3E') + ';',
    };
  }
}
PaginaHorizontal.defaultProps = {};
PaginaHorizontal.prototype.tpl = function (v) { return html`
<main aria-hidden=${v.mainOculto} style=${v.mainStyle}>
  <${C.Main}  />
  <${C.Sobre}  />
  <${C.Contexto}  />
  <${C.Desafio}  />
  <${C.InvestigacaoHorizontal}  />
  <${C.Definicao}  />
  <${C.Ideacao}  />
  <${C.Testes}  />
  <${C.Resultados}  />
  <${C.Aprendizados}  />
  <${C.Agradecimento}  />
</main>

${(v.bloqueado) ? html`
  <div style="position: fixed; inset: 0; z-index: 100; display: flex; align-items: center; justify-content: center; padding: 24px; background: rgba(247, 247, 247, 0.55); -webkit-backdrop-filter: blur(28px) saturate(120%); backdrop-filter: blur(28px) saturate(120%); font-family: Figtree, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif">
    <form role="dialog" aria-modal="true" aria-labelledby="senha-titulo" aria-describedby="senha-desc" onSubmit=${v.entrar} class=${v.modalClasse} style="width: 100%; max-width: 460px; box-sizing: border-box; display: flex; flex-direction: column; gap: 28px; padding: 40px; background: #FFFFFF; border-radius: 28px; box-shadow: 0 30px 80px rgba(26, 26, 26, 0.18)">
      <div style="display: flex; flex-direction: column; gap: 20px">
        <span aria-hidden="true" style="display: flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 18px; background: #FDECEE; color: #EA1D2C"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4.5" y="10.5" width="15" height="10" rx="2.5"></rect><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"></path><path d="M12 14.5v2.5"></path></svg></span>
        <div style="display: flex; flex-direction: column; gap: 10px">
          <h1 id="senha-titulo" style="margin: 0; font-size: 30px; font-weight: 800; line-height: 1.15; letter-spacing: -0.03em; color: #1A1A1A">Boas-vindas ao case 👋</h1>
          <p id="senha-desc" style="margin: 0; font-size: 17px; line-height: 1.5; color: #717171">Esta apresentação é protegida. Digite a senha que você recebeu para continuar.</p>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 8px">
        <label for="senha-case" style=${v.labelStyle}>Senha</label>
        <div style="position: relative">
          <input id="senha-case" class="senha-campo" type=${v.tipoCampo} autocomplete="current-password" autofocus value=${v.valor} onInput=${v.digitar} aria-invalid=${v.invalido} aria-describedby="senha-erro" placeholder="Digite a senha" style=${v.campoStyle} />
          <button type="button" class="olho" aria-label=${v.olhoLabel} onClick=${v.alternarOlho} style="position: absolute; right: 6px; top: 50%; transform: translateY(-50%); display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; padding: 0; border: 0; border-radius: 12px; background: transparent; color: #8A8A8A; cursor: pointer"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${v.olhoIcone}></path></svg></button>
        </div>
        <div id="senha-erro" aria-live="polite" style="min-height: 22px">
          ${(v.erro) ? html`
            <p style="margin: 0; display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: #D0112B"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 7.5v5.5M12 16.5h.01"></path></svg>Senha incorreta. Confira e tente de novo.</p>
          ` : null}
        </div>
      </div>
      ${(v.temSenha) ? html`
        <button type="submit" class="senha-btn" onClick=${v.entrar} style="display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 52px; padding: 0 24px; border: 0; border-radius: 999px; background: #EA1D2C; color: #FFFFFF; font: inherit; font-size: 16px; font-weight: 700; cursor: pointer; box-shadow: 0 10px 24px rgba(234, 29, 44, 0.25)">Acessar apresentação<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></button>
      ` : null}
      ${(v.semSenha) ? html`
        <button type="submit" disabled style="display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 52px; padding: 0 24px; border: 0; border-radius: 999px; background: #EFEFEF; color: #A6A6A6; font: inherit; font-size: 16px; font-weight: 700; cursor: not-allowed">Acessar apresentação<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></button>
      ` : null}
    </form>
  </div>
` : null}
`; };
C.PaginaHorizontal = PaginaHorizontal;

render(html`<${C.PaginaHorizontal} />`, document.getElementById('app'));
