    const trackDetails = {
      reading: { tag: 'Reading Play', title: '낭독극', desc: '문장과 목소리로 쓰는 10주입니다. 내가 쓴 문장을 나의 호흡으로 읽어내며 나를 설명하는 언어를 다시 찾습니다.' },
      dance: { tag: 'Dance Theater', title: '무용극', desc: '감각과 움직임으로 쓰는 12주입니다. 잘 추는 것이 아니라, 내 몸의 속도와 감정을 알아차리는 경험을 만듭니다.' },
      trpg: { tag: 'Tabletop RPG', title: 'TRPG', desc: '가상의 세계에서 역할을 맡고 선택을 내려보는 10주입니다. 현실에서 망설였던 선택을 안전하게 연습합니다.' },
      lab: { tag: 'Redefine Lab', title: 'Redefine Lab & 클럽', desc: '취향과 실험을 확장하는 자율 활동입니다. 작은 제작과 기록으로 나의 시간을 남깁니다.' },
      writer: { tag: 'Writer\'s Room', title: 'Writer\'s Room', desc: '혼자 쓰는 글이 부담스럽다면 공동 집필 방식을 통해 문장을 엮어보는 건 어떨까요? 릴레이 글쓰기, 이중시점 이야기 등을 통해 다른 사람과 자연스럽게 교감하며 책 한 권을 완성합니다.' },
      band: { tag: 'Band Session', title: 'Band Session', desc: '악기를 잘 다루지 않아도 괜찮습니다. 하나의 리듬을 맞추고 소리를 겹치며 함께 만들어지는 감각을 경험합니다. 언어가 아닌 소리를 매개로 안전한 연결감을 느낄 수 있습니다.' },
      atelier: { tag: 'Atelier', title: 'Atelier', desc: '좋아하는 것, 오래 바라보게 되는 것, 나만의 감각이 담긴 것을 작은 제품이나 오브제로 만들어봅니다. 자유로운 분위기 속에서 결과물을 만들어내며 소소한 성취감을 경험합니다.' },
      club: { tag: 'Night Club', title: '직장인 야간 클럽', desc: '회사는 다니고 있지만, 회사 밖 유의미한 관계가 단절된 직장인 고립 청년들을 위한 모임입니다. 퇴근 후 평일 저녁, 부담 없는 활동과 네트워킹을 통해 일상의 에너지를 다시 채웁니다.' }
    };

    function openModal(id) {
      const data = trackDetails[id];
      if (!data) return;
      document.getElementById('modal-tag').textContent = data.tag;
      document.getElementById('modal-title').textContent = data.title;
      document.getElementById('modal-desc').innerHTML = data.desc;
      document.getElementById('modal-backdrop').classList.add('show');
      document.body.style.overflow = 'hidden';
      lucide.createIcons();
    }
    function closeModal() {
      document.getElementById('modal-backdrop').classList.remove('show');
      document.body.style.overflow = '';
    }
    document.getElementById('modal-backdrop').addEventListener('click', (event) => {
      if (event.target.id === 'modal-backdrop') closeModal();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeModal();
    });

    function toggleFaqMore() {
      const more = document.getElementById('faq-more-content');
      const btn = document.getElementById('faq-more-btn');
      const icon = document.getElementById('faq-more-icon');
      const open = more.classList.toggle('open');
      btn.childNodes[0].textContent = open ? '질문 접기 ' : '질문 더보기 ';
      if (icon) icon.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
    }

    function recommend(input) {
      const value = input.toLowerCase();
      if (value.includes('몸') || value.includes('움직') || value.includes('감각') || value.includes('춤')) {
        return { empathy: '말보다 감각이 먼저 떠오른다면, 몸의 속도부터 살펴보는 방식이 어울릴 수 있어요.', track: '추천 트랙: 무용극', lab: '추천 Lab: Atelier', reason: '무용극은 말로 정리되지 않은 감정을 움직임으로 탐색하고, Atelier는 그 감각을 작은 오브제로 남기는 데 도움이 됩니다.' };
      }
      if (value.includes('게임') || value.includes('선택') || value.includes('상상') || value.includes('역할')) {
        return { empathy: '현실에서 바로 결정하기 어렵다면, 가상의 상황 안에서 작은 선택을 연습해볼 수 있어요.', track: '추천 트랙: TRPG', lab: '추천 Lab: Writer\'s Room', reason: 'TRPG는 역할과 선택을 통해 나의 판단 방식을 발견하고, Writer\'s Room은 그 경험을 이야기로 정리하는 데 어울립니다.' };
      }
      return { empathy: '지금의 마음을 바로 설명하지 못해도 괜찮아요. 짧은 문장부터 천천히 시작해볼 수 있습니다.', track: '추천 트랙: 낭독극', lab: '추천 Lab: Writer\'s Room', reason: '낭독극과 글쓰기는 나를 설명하는 말을 서두르지 않고 찾아가는 활동이라 처음 시작하는 참여자에게도 부담이 적습니다.' };
    }

    document.getElementById('ai-btn').addEventListener('click', () => {
      const input = document.getElementById('ai-input').value.trim();
      if (!input) { document.getElementById('ai-input').focus(); return; }
      const result = recommend(input);
      document.getElementById('ai-empathy').textContent = result.empathy;
      document.getElementById('ai-track').textContent = result.track;
      document.getElementById('ai-lab').textContent = result.lab;
      document.getElementById('ai-reason').textContent = result.reason;
      document.getElementById('ai-result').classList.add('show');
    });

    lucide.createIcons();
  
