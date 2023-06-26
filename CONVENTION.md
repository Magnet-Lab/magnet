# Convention

- `CONVENTION.md`파일에 포함되는 내용은 프로젝트에서 규칙을 정리하고 있습니다.
- 아래 내용을 참고해주세요.

## Table of contents

- [Git convention](#git-convention)
- [Commit convention](#commit-convention)

## Git convention

1. 기본적으로 Trunk-based 방식으로 GitHub 프로젝트를 관리합니다.
2. Trunk-based 방식은 GitHub 버전 컨트롤 방법 중 하나이며, 하나의 Main 브랜치만 관리합니다.
3. Main 브랜치는 항상 프로덕션이 가능한 상태를 유지하고 있어야 합니다.
4. 따라서 병합이 필요한 작업 브랜치가 있다면, 결함이나 오류가 없는 브랜치만 가능합니다.

### Branch 생성하기

> 브랜치 생성, 분기 그리고 병합과 관련한 내용을 포함합니다.

1.1. `feat/issue-name`

- 신규 기능을 작업하기 위한 이슈가 등록된 상태라면 해당 브랜치를 생성합니다.

  ```bash
  $git branch # 현재 브랜치를 확인합니다.
  $git branch -d feat/issue-name # 브랜치를 생성하고 스위치합니다.
  ```

1.2. `refactor/issue-name`

- 프로젝트 내부 구조를 재정의 하거나 유지보수가 필요한 작업 시 해당 브랜치를 생성합니다.

  ```bash
  $git branch # 현재 브랜치를 확인합니다.

  $git branch -d refactor/issue-name # 브랜치를 생성하고 스위치합니다.
  ```

1.3.  `hotfix/issue-name`

- 프로젝트 오류나 문제가 발생할 때 빠르게 수정하기 위해 생성하는 브랜치입니다.

  ```bash
  $git branch # 현재 브랜치를 확인합니다.
  
  $git branch -d hotfix/issue-name
  ```

1.4.  `test/drive-sprint-number`

- 진행되는 작업들이 모두 완료되어 해당 마일스톤이 완료 상태일 때 생성합니다.

- 작업한 Sub 브랜치를 병합하고 통합 테스트를 진행하기 위한 브랜치입니다.

  ```bash
  $git branch # 현재 브랜치를 확인합니다.
  
  $git branch -d test/drive-sprint-number # 예) drive-1
  ```

1.5.  `release/appname`

- 애플리케이션 배포 단계에서 생성하는 브랜치입니다.

- 통합 테스트 완료 후 내용이 병합된 main 브랜치에서 분기됩니다.

  ```bash
  $git branch # 현재 브랜치를 확인합니다.
  
  $git branch -d release/magnet
  ```

---

## Commit convention

- 커밋 메세지는 `type: subject` 형식으로 작성합니다. 이때 spacing은 `:` 앞에 한 번만 사용합니다.
- `:(콜론)`은 `type`에 붙여서 사용하고 subject와는 간격을 두어야 합니다.
- subject 작성 시 첫 단어로 영어를 사용할 경우 반드시 대문자로 시작해야 하며, 다음 단어는 spacing후 소문자로 작성합니다.
- 메세지를 끝맺을 때 `., !, -, ?`와 같은 마침표 문자를 사용하지 않습니다.
- `#n`문자는 연결된 이슈가 있으면 사용합니다. 이때 `#n`은 이슈 번호입니다.
- `delete` 구분자는 파일을 완전히 삭제할 때 사용합니다. 파일 내용 중 일부분을 변경한거라면 `modified`를 사용합니다.

### 1.표기법 예시

1.1. `add:`

- 파일 또는 새로운 작업 내용을 추가할 때 사용하는 구분자입니다.

  ```bash
  $git commit -m "add: 구글 로그인 서비스"

  $git commit -m "add(api): #n 구글 로그인"
  ```

1.2. `feat:`

- 기능을 구현했을 때 사용하는 구분자입니다.

  ```bash
  $git commit -m "feat: #n 구글 로그인"

  $git commit -m "feat(function): #n 구글 로그인"
  ```

1.3. `modified:`

- 파일 내용을 변경할 때 사용하는 구분자입니다.

> 프로젝트에서 완전히 삭제되는 파일 또는 내용인 경우 `delete:` 구분자를 사용하세요.

  ```bash
  $git commit -m "modified: 사용자 목록"

  $git commit -m "modified(component): #n 사용자 목록"
  ```

1.4. `delete:`

- 파일을 완전히 삭제하거나 내용 중 일부분 삭제하는 경우 사용합니다.

  ```bash
  $git commit -m "delete: 사용자 계정 아바타 아이콘"

  $git commit -m "delete(asset): #n 사용자 계정 아바타 아이콘"
  ```

1.5. `fix:`

- 파일의 치명적인 문제를 해결할 때 사용하는 구분자입니다.

  ```bash
  $git commit -m "fix: Pagination 애니메이션 오류"
  $git commit -m "fix(component): #n Pagination 애니메이션 오류"
  ```

### 2.혼용 표기법

> 한/영단어를 섞어 사용해도 좋지만, 되도록 한글 또는 영문으로 표기하는 것을 추천합니다.

```bash
$git commit -m "add(file): #n CONVENTION 문서"

$git commit -m "modified(function): #n 이벤트 삭제 처리"

$git commit -m "delete(component): #n Footer 컴포넌트 삭제"
```
