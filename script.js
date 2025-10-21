const AppData = {
        laboral: {
            contratos: [
                { id: 'indeterminado', title: 'Tiempo Indeterminado', icon: '&#8734;', summary: 'Sin fecha de finalización, con un período de prueba inicial de 3 meses.', details: `Es la modalidad principal y se presume por ley (presunción iuris tantum). No tiene fecha de finalización definida. <br><br><b>Período de Prueba:</b> Los primeros 3 meses se consideran a prueba. Durante este lapso, cualquiera de las partes puede terminar el contrato sin causa ni indemnización, pero con un preaviso de 15 días. Un empleador no puede contratar al mismo trabajador a prueba más de una vez. Se considera abusivo contratar trabajadores a prueba sucesivamente para el mismo puesto permanente.<br><br><b>Preaviso:</b> Pasado el período de prueba, el trabajador debe preavisar con 15 días. El empleador debe preavisar con 1 mes (si la antigüedad es menor a 5 años) o 2 meses (si es mayor).` },
                { id: 'plazo_fijo', title: 'Plazo Fijo', icon: '&#128197;', summary: 'Duración determinada (máx. 5 años) por una causa objetiva y por escrito.', details: `Debe cumplir dos requisitos acumulativos: 1) celebrarse por escrito y 2) tener una causa objetiva basada en la naturaleza de las tareas que justifique el plazo (ej. un proyecto con fecha de fin). La duración máxima es de 5 años.<br><br><b>Preaviso:</b> Las partes deben preavisar la extinción con una antelación no menor de 1 mes ni mayor de 2. Esto confirma la fecha de vencimiento. Si no se preavisa, el contrato se convierte en uno por tiempo indeterminado.<br><br><b>Extinción:</b> Si se cumple el plazo y se preavisa, no corresponde indemnización por antigüedad. Si el empleador despide sin causa antes del vencimiento, debe pagar la indemnización por antigüedad más una por daños y perjuicios (equivalente a los salarios restantes hasta el fin del contrato).` },
                { id: 'temporada', title: 'Por Temporada', icon: '&#127809;', summary: 'Prestación discontinua, para actividades que se realizan en épocas específicas del año.', details: `Es un contrato de tiempo indeterminado, pero la prestación de servicios es discontinua, ocurriendo solo durante ciertas épocas del año.<br><br><b>Tipos:</b><br>• <b>Típico:</b> La actividad de la empresa solo existe en una temporada (ej. cosecha, turismo de verano).<br>• <b>Atípico:</b> La actividad se realiza todo el año pero se intensifica en una temporada, requiriendo más personal (ej. heladería en verano).<br><br><b>Reinicio de Temporada:</b> El empleador debe notificar al trabajador su voluntad de reincorporarlo con al menos 30 días de antelación. El trabajador debe responder dentro de los 5 días. Si el empleador no notifica, se considera despido injustificado.` },
                { id: 'eventual', title: 'Eventual', icon: '&#9889;', summary: 'Para servicios extraordinarios o exigencias transitorias sin un plazo cierto.', details: `Se utiliza para cubrir necesidades puntuales y extraordinarias de la empresa que no están ligadas a su actividad normal. No tiene un plazo de duración predeterminado, ya que finaliza cuando la tarea o el evento extraordinario concluye.<br><br><b>Causa:</b> Debe existir una exigencia extraordinaria y transitoria (ej. organizar un congreso, reemplazar temporalmente a un trabajador con licencia). El empleador es quien debe probar la eventualidad.<br><br><b>Finalización:</b> No requiere preaviso, ya que su extinción depende del agotamiento de la causa que le dio origen. No genera derecho a indemnización por antigüedad.` },
                { id: 'parcial', title: 'Tiempo Parcial', icon: '&#9202;', summary: 'Jornada laboral inferior a dos tercios de la jornada habitual.', details: `El trabajador se obliga a prestar servicios durante un número de horas al día o a la semana inferior a las dos terceras partes (2/3) de la jornada habitual de la actividad. La remuneración debe ser proporcional a la de un trabajador de tiempo completo para la misma categoría.<br><br><b>Horas Extras:</b> Los trabajadores a tiempo parcial no pueden realizar horas extras, salvo en casos de peligro o accidente grave.<br><br><b>Indemnización:</b> En caso de despido, la indemnización se calcula de la misma forma que para un trabajador de tiempo completo.` },
                { id: 'aprendizaje', title: 'Aprendizaje', icon: '&#128218;', summary: 'Para jóvenes de 15 a 28 años, con duración de 3 a 12 meses.', details: `Es un contrato formativo destinado a jóvenes sin empleo de entre 15 y 28 años. Debe celebrarse por escrito y tiene una duración mínima de 3 meses y máxima de 1 año.<br><br><b>Jornada y Formación:</b> La jornada no puede superar las 40 horas semanales, incluyendo el tiempo dedicado a la formación teórica.<br><br><b>Cupo:</b> El número de aprendices no puede superar el 10% de los trabajadores permanentes del establecimiento.<br><br><b>Finalización:</b> El empleador debe preavisar con 30 días de antelación. Al finalizar, debe entregar un certificado que acredite la experiencia adquirida.` },
                { id: 'pasantias', title: 'Pasantías', icon: '&#127891;', summary: 'Formación profesional para estudiantes, con intervención de una institución educativa.', details: `Es una modalidad formativa, no un contrato laboral. Involucra a tres partes: un pasante (estudiante de 15 a 26 años), la empresa y la institución educativa. El objetivo es que el estudiante realice prácticas relacionadas con su formación académica.<br><br><b>Duración y Jornada:</b> Tiene una duración de 2 meses a 4 años, con una jornada máxima de 6 horas diarias.<br><br><b>Compensación:</b> El pasante recibe una asignación estímulo de carácter no remuneratorio (no es un salario).<br><br><b>Certificación:</b> Al finalizar, la empresa debe entregar un certificado que acredite la experiencia y las habilidades desarrolladas.` }
            ],
            obrasSociales: [
                { id: 'concepto', icon: '🏥', title: 'Concepto y Ley', summary: 'Entidades de atención médica reguladas por la Ley 23.660.', details: 'Las Obras Sociales son entidades encargadas de organizar la prestación de la atención médica para los trabajadores en Argentina. Su marco regulatorio es la Ley 23.660. El financiamiento se basa en un aporte económico mensual y obligatorio del TRES por ciento (3%) de los ingresos del trabajador.' },
                { id: 'titulares', icon: '👤', title: 'Beneficiarios Titulares', summary: 'Trabajadores, jubilados y pensionados.', details: 'Quedan obligatoriamente incluidos como beneficiarios titulares:<br>• Trabajadores en relación de dependencia del ámbito privado y sector público (Poderes Ejecutivo y Judicial, Universidades Nacionales, empresas del Estado, etc.).<br>• Jubilados y pensionados nacionales.<br>• Beneficiarios de prestaciones no contributivas nacionales.' },
                { id: 'grupo_familiar', icon: '👨‍👩‍👧‍👦', title: 'Grupo Familiar', summary: 'Cónyuge, hijos y otros familiares a cargo.', details: 'La cobertura se extiende al grupo familiar primario, que incluye:<br>• El cónyuge del afiliado.<br>• Hijos solteros hasta los 21 años.<br>• Hijos solteros entre 21 y 25 años inclusive, si estudian y están a exclusivo cargo del titular.<br>• Hijos incapacitados sin límite de edad.<br>• Hijos del cónyuge.<br>• Menores cuya guarda y tutela haya sido acordada por autoridad.<br>• Personas que convivan con el titular y reciban trato familiar.<br>• Otros ascendientes o descendientes a cargo, con un aporte adicional del 1,5% por cada uno.' },
                { id: 'extincion', icon: '⏰', title: 'Extinción del Contrato', summary: 'Mantenimiento de cobertura por 3 meses.', details: 'En caso de extinción del contrato de trabajo, los trabajadores que hayan trabajado de forma continuada por más de tres (3) meses mantendrán su calidad de beneficiarios (incluyendo su grupo familiar) durante un período de tres (3) meses contados desde el distracto, sin obligación de efectuar aportes.' },
            ],
            asignaciones: [
                { id: 'hijo', icon: '👧', title: 'Por Hijo', details: 'Consiste en el pago de una suma mensual por cada hijo menor de 18 años que se encuentre a cargo del trabajador.' },
                { id: 'hijo_discapacidad', icon: '♿', title: 'Por Hijo con Discapacidad', details: 'Pago de una suma mensual por cada hijo con discapacidad a cargo, sin límite de edad. Se abona a partir del mes en que se acredita la condición.' },
                { id: 'prenatal', icon: '🤰', title: 'Prenatal', details: 'Suma equivalente a la asignación por hijo, abonada desde la concepción hasta el nacimiento. Requiere una antigüedad mínima de tres meses en el empleo.' },
                { id: 'ayuda_escolar', icon: '🎒', title: 'Ayuda Escolar Anual', details: 'Pago de una suma de dinero en el mes de marzo de cada año por cada hijo que concurra a establecimientos de enseñanza básica y polimodal, o de educación diferencial.' },
                { id: 'maternidad', icon: '👩‍🍼', title: 'Por Maternidad', details: 'Pago de una suma igual a la remuneración que la trabajadora percibiría, abonada durante el período de licencia legal. Requiere una antigüedad mínima de tres meses en el empleo.' },
                { id: 'nacimiento', icon: '👶', title: 'Por Nacimiento', details: 'Pago de una suma de dinero por única vez en el mes que se acredita el hecho. Requiere una antigüedad mínima y continuada de seis meses en el empleo.' },
                { id: 'adopcion', icon: '👨‍👨‍👧', title: 'Por Adopción', details: 'Pago de una suma de dinero por única vez en el mes que se acredita el acto. Requiere una antigüedad mínima y continuada de seis meses en el empleo.' },
                { id: 'matrimonio', icon: '💍', title: 'Por Matrimonio', details: 'Pago de una suma de dinero por única vez. Requiere una antigüedad mínima de seis meses. Se abona a ambos cónyuges si los dos están cubiertos por la ley.' },
            ],
            prestaciones: [
                { title: 'Jubilación Ordinaria', description: 'Mujeres: 60 años y 30 de aportes. Hombres: 65 años y 30 de aportes.' },
                { title: 'Pensión por Fallecimiento (Jubilado)', description: 'Para viuda/o, concubino/a o hijos menores/incapacitados del jubilado fallecido.' },
                { title: 'Pensión por Fallecimiento (Activo)', description: 'Para familiares si el trabajador era aportante regular o irregular con derecho.' },
                { title: 'Retiro por Invalidez', description: 'Para trabajadores con incapacidad del 66% o más que cumplan con la condición de aportante.' }
            ]
        },
        informatico: {
            delitos: [
                { id: 'sabotaje', icon: '&#128163;', title: 'Sabotaje Informático', description: 'Implica la acción de destruir o inutilizar deliberadamente el centro de cómputos, los equipos (hardware), los programas (software) o la información almacenada en los sistemas. Se considera una de las conductas más graves y frecuentes, a menudo con motivaciones políticas o de venganza.' },
                { id: 'pirateria', icon: '&#9760;&#65039;', title: 'Piratería Informática', description: 'Consiste en la violación de los derechos de autor sobre el software. Implica la copia, distribución o uso de programas sin la debida licencia o autorización del titular de los derechos.<br><br><b>Modalidades:</b><br>• <b>Hurto de tiempo de máquina:</b> Empleo no autorizado de los recursos computacionales de una empresa para fines personales.<br>• <b>Apropiación de software y datos:</b> Acceder a un sistema ajeno para copiar o sustraer archivos e información.' },
                { id: 'fraude_cajeros', icon: '&#128179;', title: 'Fraude con Cajeros/Tarjetas', description: 'Conductas que buscan retirar dinero de cajeros automáticos de forma fraudulenta. Esto puede lograrse mediante el uso de una tarjeta de crédito o débito robada, o a través de la obtención de los datos de la tarjeta y el PIN (clave de acceso) por medios engañosos (phishing, skimming).' },
                { id: 'robo_identidad', icon: '&#128585;', title: 'Robo de Identidad', description: 'Consiste en la apropiación de los datos personales de un individuo (nombre, DNI, claves, etc.) para luego hacerse pasar por esa persona y realizar todo tipo de operaciones en su nombre, como solicitar créditos, realizar compras o cometer otros delitos. Legalmente, esta conducta encuadra en el delito de estafa.' },
                { id: 'manipulacion', icon: '&#128187;', title: 'Fraude por Manipulación', description: 'Se refiere a los fraudes cometidos mediante la alteración de sistemas informáticos. La Organización de Naciones Unidas (ONU) reconoce diversas formas, como:<br>• <b>Manipulación de datos de entrada:</b> Alterar datos antes o durante su ingreso al sistema.<br>• <b>Manipulación de programas:</b> Modificar el software para que realice funciones no autorizadas.<br>• <b>Daños o modificaciones de datos:</b> Alterar o eliminar datos ya almacenados.' },
                { id: 'acceso_ilegitimo', icon: '&#128273;', title: 'Acceso Ilegítimo', description: 'Regulado en el Art. 153 bis del Código Penal, sanciona a quien a sabiendas y sin la debida autorización acceda a un sistema o dato informático de acceso restringido. La pena se agrava si el acceso perjudica a un sistema de un organismo público o de un proveedor de servicios financieros o públicos.' }
            ],
             articulos: [
                { title: 'Art. 128: Pornografía Infantil', content: 'Pena de 6 meses a 4 años para quien produzca, financie, ofrezca o distribuya material de explotación sexual infantil.' },
                { title: 'Art. 153: Violación de Comunicaciones', content: 'Pena de 15 días a 6 meses para quien acceda indebidamente a una comunicación electrónica ajena. La pena se agrava si publica su contenido.' },
                { title: 'Art. 153 bis: Acceso Ilegítimo a Sistemas', content: 'Pena de 15 días a 6 meses para quien acceda sin autorización a un sistema o dato informático de acceso restringido.' },
                { title: 'Art. 173 inc. 16: Defraudación Informática', content: 'Sanciona a quien defraude a otro mediante manipulación informática que altere el funcionamiento de un sistema o la transmisión de datos.' },
                { title: 'Art. 183: Daño Informático', content: 'Pena para quien altere, destruya o inutilice datos, programas o sistemas informáticos, o distribuya software malicioso (virus).' },
                { title: 'Art. 197: Interrupción de Comunicaciones', content: 'Pena de 6 meses a 2 años para quien interrumpa o entorpezca una comunicación telegráfica, telefónica o de otra naturaleza.' }
            ]
        },
        software: {
            proteccion: [
                { id: 'patentes', icon: '&#128220;', title: 'Derecho de Patentes', summary: 'Protege invenciones con novedad y aplicabilidad industrial.', details: 'Una patente otorga un derecho exclusivo sobre una invención, impidiendo que terceros la fabriquen, usen o vendan. Para ser patentable, una invención debe cumplir tres requisitos: <b>novedad</b> (no ser conocida previamente), <b>nivel inventivo</b> (no ser obvia para un experto) y <b>aplicabilidad industrial</b>.<br><br>El software raramente cumple estas condiciones, ya que se basa en algoritmos, que son considerados ideas abstractas y no invenciones. Sin embargo, existe una tendencia a patentar software cuando forma parte de un invento mayor que sí produce un efecto técnico tangible.' },
                { id: 'autor', icon: '&#169;&#65039;', title: 'Derechos de Autor', summary: 'Sistema mayoritario que protege la expresión del código.', details: 'Es el régimen adoptado mayoritariamente a nivel internacional y en Argentina (Ley 25.036). No protege la idea o el algoritmo, sino la forma en que esa idea fue expresada: el código fuente y el código objeto. La protección es automática desde el momento de la creación y no requiere un examen de novedad. Garantiza una fuerte protección internacional a través de tratados como el Convenio de Berna.' },
                { id: 'secreto', icon: '&#128272;', title: 'Secreto Industrial', summary: 'Protege la confidencialidad de la información del software.', details: 'Este mecanismo protege cualquier información confidencial que otorgue a una empresa una ventaja competitiva, como algoritmos, código fuente o documentación técnica. La protección dura mientras la información se mantenga en secreto. No protege contra la ingeniería inversa ni contra un desarrollo independiente por parte de un competidor que llegue a la misma solución.' },
                { id: 'disenos', icon: '&#128125;', title: 'Diseños y Modelos', summary: 'Protege la apariencia visual o interfaz gráfica.', details: 'Esta vía protege los aspectos ornamentales o estéticos de un producto. En el caso del software, se utiliza para proteger la interfaz de usuario (UI), como la disposición de los elementos en pantalla, los iconos o los gráficos. No protege la funcionalidad ni el código subyacente del programa.' },
                { id: 'marca', icon: '&#174;&#65039;', title: 'Marca o Nombre', summary: 'Protege el nombre comercial y el logo del software.', details: 'La marca registrada protege los signos distintivos que identifican a un producto o servicio en el mercado, como el nombre del software (ej. "Windows") o su logo. Su función es evitar que los competidores usen nombres o logos similares que puedan confundir a los consumidores. No ofrece ninguna protección sobre la tecnología del software en sí.' },
                { id: 'especial', icon: '&#10024;', title: 'Derecho Especial (Sui Generis)', summary: 'Propuesta teórica para un régimen legal específico.', details: 'Debido a la naturaleza única del software, algunos expertos han propuesto crear un sistema legal "sui generis" (único en su tipo) que combine elementos del derecho de patentes (protección de la funcionalidad) y del derecho de autor (protección de la expresión). Sin embargo, esta es una corriente minoritaria y su principal obstáculo es la falta de un tratado internacional que la respalde, lo que dificultaría su aplicación global.' }
            ],
            etica: [
                 { icon: '&#128128;', title: 'No dañar a otros', description: 'Evitar el uso de la tecnología para perjudicar a personas o interferir con su trabajo.' },
                 { icon: '&#169;&#65039;', title: 'Respetar la Propiedad Intelectual', description: 'No copiar, usar o apropiarse de software, contenido o ideas ajenas sin permiso.' },
                 { icon: '&#128272;', title: 'Proteger la Privacidad', description: 'No espiar en archivos o datos privados de otras personas sin autorización.' },
                 { icon: '&#129296;', title: 'Confidencialidad', description: 'Mantener el secreto profesional sobre la información a la que se tiene acceso.' },
                 { icon: '&#128172;', title: 'Honestidad y Veracidad', description: 'Ser justo, evitar la falsedad y no dar falso testimonio en el uso de los sistemas.' },
                 { icon: '&#127758;', title: 'Responsabilidad Social', description: 'Considerar las consecuencias sociales de los programas y sistemas que se diseñan.' },
                 { icon: '&#128187;', title: 'Competencia Profesional', description: 'Realizar trabajos únicamente dentro del área de experiencia propia.' },
                 { icon: '&#129309;', title: 'No Discriminación', description: 'Fomentar la igualdad, el respeto y la tolerancia en el uso y diseño de tecnología.' }
            ]
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        const navLinks = document.querySelectorAll('#main-nav a');
        const contentSections = document.querySelectorAll('.content-section');
        const modal = document.getElementById('info-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalContent = document.getElementById('modal-content');
        const modalCloseBtn = document.getElementById('modal-close-btn');

        const openModal = (title, content) => {
            if (!modal || !modalTitle || !modalContent) return;
            modalTitle.innerText = title;
            modalContent.innerHTML = content;
            modal.classList.remove('hidden');
        };

        const closeModal = () => {
            if (!modal) return;
            modal.classList.add('hidden');
        };
        
        if (modal) {
            modalCloseBtn.addEventListener('click', closeModal);
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });
        }

        const setActiveTab = (targetId) => {
            navLinks.forEach(link => {
                link.classList.toggle('active', link.dataset.target === targetId);
            });
            contentSections.forEach(section => {
                section.classList.toggle('active', section.id === targetId);
            });
        };

        const targetFromHash = window.location.hash.substring(1);
        if (['laboral', 'informatico', 'software'].includes(targetFromHash)) {
            setActiveTab(targetFromHash);
        }

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = e.target.dataset.target;
                setActiveTab(targetId);
                window.location.hash = targetId;
                window.scrollTo(0, 0);
            });
        });

        function populateContratos() {
            const grid = document.getElementById('contratos-grid');
            if (!grid) return;
            
            grid.innerHTML = AppData.laboral.contratos.map(c => `
                <div class="card p-4 text-center interactive-card" data-id="${c.id}" data-type="contrato">
                    <div class="text-4xl mb-2">${c.icon}</div>
                    <h4 class="text-lg font-bold">${c.title}</h4>
                    <p class="text-sm text-text-light mt-1">${c.summary}</p>
                </div>
            `).join('');
        }

        function populateObrasSociales() {
            const grid = document.getElementById('obras-sociales-grid');
            if (!grid) return;
            grid.innerHTML = AppData.laboral.obrasSociales.map(o => `
                <div class="card p-4 text-center interactive-card" data-id="${o.id}" data-type="obraSocial">
                    <div class="text-4xl mb-2">${o.icon}</div>
                    <h4 class="text-lg font-bold">${o.title}</h4>
                    <p class="text-sm text-text-light mt-1">${o.summary}</p>
                </div>
            `).join('');
        }

        function populateAsignaciones() {
            const grid = document.getElementById('asignaciones-grid');
            if (!grid) return;
            grid.innerHTML = AppData.laboral.asignaciones.map(a => `
                <div class="card p-4 text-center interactive-card h-full flex flex-col justify-center" data-id="${a.id}" data-type="asignacion">
                    <div class="text-4xl mb-2">${a.icon}</div>
                    <h4 class="text-lg font-bold">${a.title}</h4>
                </div>
            `).join('');
        }
        
        function populatePrestaciones() {
            const grid = document.getElementById('prestaciones-grid');
            if(!grid) return;
            grid.innerHTML = AppData.laboral.prestaciones.map(p => `
                 <div class="p-4">
                    <h4 class="font-bold text-lg text-accent-primary">${p.title}</h4>
                    <p class="text-sm text-text-light mt-1">${p.description}</p>
                 </div>
            `).join('');
        }

        function populateDelitos() {
            const grid = document.getElementById('delitos-grid');
            if(!grid) return;
            grid.innerHTML = AppData.informatico.delitos.map(d => `
                <div class="card p-4 text-center interactive-card" data-id="${d.id}" data-type="delito">
                    <div class="text-4xl mb-2">${d.icon}</div>
                    <h4 class="text-lg font-bold">${d.title}</h4>
                </div>
            `).join('');
        }
        
        function populateArticulos() {
            const container = document.getElementById('articulos-container');
            if (!container) return;
            container.innerHTML = AppData.informatico.articulos.map(a => `
                <div class="card p-6">
                    <h4 class="font-bold text-lg mb-2 text-accent-primary">${a.title}</h4>
                    <p class="text-text-light">${a.content}</p>
                </div>
            `).join('');
        }

        function populateProteccion() {
            const grid = document.getElementById('proteccion-grid');
            if(!grid) return;
            grid.innerHTML = AppData.software.proteccion.map(p => `
                <div class="card p-4 text-center interactive-card" data-id="${p.id}" data-type="proteccion">
                     <div class="text-4xl mb-2">${p.icon}</div>
                    <h4 class="text-lg font-bold">${p.title}</h4>
                    <p class="text-sm text-text-light mt-1">${p.summary}</p>
                </div>
            `).join('');
        }

        function populateEtica() {
            const container = document.getElementById('etica-container');
            if(!container) return;
            container.innerHTML = AppData.software.etica.map(e => `
                <div class="card p-6 flex items-start space-x-4">
                    <div class="text-3xl">${e.icon}</div>
                    <div>
                        <h4 class="font-bold text-lg">${e.title}</h4>
                        <p class="text-text-light">${e.description}</p>
                    </div>
                </div>
            `).join('');
        }
        
        document.body.addEventListener('click', (e) => {
            const card = e.target.closest('.interactive-card');
            if (card) {
                const id = card.dataset.id;
                const type = card.dataset.type;
                let data;

                if (type === 'contrato') {
                    data = AppData.laboral.contratos.find(item => item.id === id);
                } else if (type === 'delito') {
                    data = AppData.informatico.delitos.find(item => item.id === id);
                } else if (type === 'proteccion') {
                    data = AppData.software.proteccion.find(item => item.id === id);
                } else if (type === 'obraSocial') {
                    data = AppData.laboral.obrasSociales.find(item => item.id === id);
                } else if (type === 'asignacion') {
                    data = AppData.laboral.asignaciones.find(item => item.id === id);
                }

                if (data) {
                    const content = data.details ? `<p class="text-text-light text-lg">${data.details}</p>` : `<p class="text-text-light text-lg">${data.description}</p>`;
                    openModal(data.title, content);
                }
            }
        });

        populateContratos();
        populateObrasSociales();
        populateAsignaciones();
        populatePrestaciones();
        populateDelitos();
        populateArticulos();
        populateProteccion();
        populateEtica();
    });
